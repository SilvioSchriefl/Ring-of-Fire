import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RingFirestoreService } from '../ring-firestore.service';

@Component({
  selector: 'app-dialog-newgame',
  templateUrl: './dialog-newgame.component.html',
  styleUrls: ['./dialog-newgame.component.sass']
})
export class DialogNewgameComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNewgameComponent>, public RingFirestoreService: RingFirestoreService) {}

    onNoClick() {
      this.dialogRef.close();
    }
}
