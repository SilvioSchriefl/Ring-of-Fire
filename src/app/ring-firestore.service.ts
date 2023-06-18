
import { Game } from 'src/models/game';
import { Injectable, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc, } from '@firebase/firestore';
import { Firestore, collectionData, getDoc, getFirestore, onSnapshot, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DialogChangeAvatarComponent } from './dialog-change-avatar/dialog-change-avatar.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class RingFirestoreService {

  private itemCollection: CollectionReference<DocumentData>;
  avatar_images = ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5', 'avatar6', 'avatar7', 'avatar8', 'avatar9']
  public id = ''
  db = getFirestore()
  route: string = ''
  active_player = ''
  public game_data: any =
    {
      players: [],
      avatar_images: [],
      stack: [],
      played_cards: [],
      current_player: 0,
      id: '',
      pick_card_animation: false,
      put_on_table_animation: false,
      d_none: true,
      top_card: '14_of_dummy'
    }

  constructor(private readonly firestore: Firestore, private router: Router, public dialog: MatDialog) {
    this.itemCollection = collection(this.firestore, 'Game');
  }


  async createGame() {
    this.fillStack();
    const docRef = addDoc(this.itemCollection, this.game_data);
    this.game_data.id = (await docRef).id
    this.updateGame();
    this.router.navigateByUrl('/game/' + this.game_data.id)
  }

  updateGame() {
    const docRef = doc(this.db, "Game", this.game_data.id);
    updateDoc(docRef, this.game_data)
  }

  async getGameData(id: string) {
    const docRef = doc(this.db, "Game", id);
    const docSnap = await getDoc(docRef);
    this.game_data = docSnap.data();
    onSnapshot(doc(this.db, "Game", this.game_data.id), (doc) => {
      this.game_data = doc.data();
      console.log("Current data: ", this.game_data);
    });

  }

  fillStack() {
    for (let i = 1; i < 14; i++) {
      this.game_data.stack.push(i + '_of_clubs')
      this.game_data.stack.push(i + '_of_diamonds')
      this.game_data.stack.push(i + '_of_hearts')
      this.game_data.stack.push(i + '_of_spades')
    }
    this.shuffle(this.game_data.stack)
  }

  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex: number;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  openChooseAvatar(name: any): void {
    const dialogRef = this.dialog.open(DialogChangeAvatarComponent);
    dialogRef.afterClosed().subscribe(img => {
      if (img.length > 0) {
        this.game_data.players.push(name);
        this.active_player = this.game_data.players[this.game_data.current_player]
        this.game_data.avatar_images.push(img)
        this.updateGame();
      }
    });
  }
}
