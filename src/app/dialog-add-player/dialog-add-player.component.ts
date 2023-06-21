import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RingFirestoreService } from '../ring-firestore.service';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.sass']
})
export class DialogAddPlayerComponent {

  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogAddPlayerComponent>, public RingFirestoreService: RingFirestoreService) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
