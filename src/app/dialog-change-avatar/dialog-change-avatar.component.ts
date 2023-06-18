import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RingFirestoreService } from '../ring-firestore.service';

@Component({
  selector: 'app-dialog-change-avatar',
  templateUrl: './dialog-change-avatar.component.html',
  styleUrls: ['./dialog-change-avatar.component.sass']
})
export class DialogChangeAvatarComponent {

  avatar_images = ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5', 'avatar6', 'avatar7', 'avatar8', 'avatar9']
  
  class: any;

  constructor(
    public dialogRef: MatDialogRef<DialogChangeAvatarComponent>, public RingFirestoreService: RingFirestoreService) { }


  onNoClick() {
    this.dialogRef.close();
  }
}


