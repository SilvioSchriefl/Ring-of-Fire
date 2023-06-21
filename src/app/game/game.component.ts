
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { RingFirestoreService } from '../ring-firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DialogChangeAvatarComponent } from '../dialog-change-avatar/dialog-change-avatar.component';
import { DialogEditPlayerComponent } from '../dialog-edit-player/dialog-edit-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, public RingFirestoreService: RingFirestoreService) { }


  ngOnInit(): void {
    this.RingFirestoreService.getGameData(this.route.params['_value']['id']);
  }


  pickCard() {
    if (this.RingFirestoreService.game_data.players.length == 0 || this.RingFirestoreService.game_over == true) return
    this.RingFirestoreService.game_data.pick_card_animation = true;
    this.setTimeOuts();
    this.RingFirestoreService.game_data.top_card = this.RingFirestoreService.game_data.stack.pop()!;
    this.changeActivePlayer();
    this.RingFirestoreService.updateGame()
    this.checkForGameOver();
  }


  setTimeOuts() {
    setTimeout(() => {
      this.RingFirestoreService.game_data.put_on_table_animation = true
      this.RingFirestoreService.updateGame()
    }, 500);
    setTimeout(() => {
      this.RingFirestoreService.game_data.d_none = false
      this.RingFirestoreService.updateGame()
    }, 1800);
    setTimeout(() => {
      this.RingFirestoreService.game_data.d_none = true
      this.RingFirestoreService.game_data.put_on_table_animation = false
      this.RingFirestoreService.updateGame()
    }, 2000);
    setTimeout(() => {
      this.RingFirestoreService.game_data.pick_card_animation = false
      this.RingFirestoreService.updateGame()
    }, 1900);
    setTimeout(() => {
      this.RingFirestoreService.game_data.played_cards.push(this.RingFirestoreService.game_data.top_card)
      this.RingFirestoreService.updateGame()
    }, 1800);
  }

  checkForGameOver() {
    if (this.RingFirestoreService.game_data.stack.length == 0) {
      this.RingFirestoreService.game_over = true;
      setTimeout(() => this.RingFirestoreService.newGame(), 2000);
    }
  }


  changeActivePlayer() {
    this.RingFirestoreService.game_data.current_player++;
    this.RingFirestoreService.game_data.current_player = this.RingFirestoreService.game_data.current_player % this.RingFirestoreService.game_data.players.length;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.RingFirestoreService.openChooseAvatar(name);
      }
    });
  }


  editPlayer(i: any): void {
    const dialogRef = this.dialog.open(DialogEditPlayerComponent);
    dialogRef.afterClosed().subscribe(name => {
      if (name == 'del') {
        this.RingFirestoreService.game_data.avatar_images.splice(i, 1)
        this.RingFirestoreService.game_data.players.splice(i, 1)
        this.RingFirestoreService.updateGame();
      }
      if (this.RingFirestoreService.avatar_images.includes(name)) {
        this.RingFirestoreService.game_data.avatar_images[i] = name
        this.RingFirestoreService.updateGame();
      }
      if (!this.RingFirestoreService.avatar_images.includes(name) && name && name != 'del') {
        this.RingFirestoreService.game_data.players[i] = name
        this.RingFirestoreService.updateGame();
      }
    });
  }
}
