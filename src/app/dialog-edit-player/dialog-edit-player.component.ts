import { Component } from '@angular/core';
import { DialogChangeAvatarComponent } from '../dialog-change-avatar/dialog-change-avatar.component';
import { MatDialogRef } from '@angular/material/dialog';
import { RingFirestoreService } from '../ring-firestore.service';

@Component({
  selector: 'app-dialog-edit-player',
  templateUrl: './dialog-edit-player.component.html',
  styleUrls: ['./dialog-edit-player.component.sass']
})
export class DialogEditPlayerComponent {

  name = '';

  constructor(
    public dialogRef: MatDialogRef<DialogEditPlayerComponent>, public RingFirestoreService: RingFirestoreService) { }
    
  onNoClick() {
    this.dialogRef.close();
  }
}
