import { Component, Input } from '@angular/core';
import { RingFirestoreService } from '../ring-firestore.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {

  @Input() image: any = 'avatar1'
  @Input() name: any;
  @Input() player_active: boolean = false;

  constructor (public RingFirestoreService: RingFirestoreService) {}

}
