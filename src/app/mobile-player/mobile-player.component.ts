import { Component, Input } from '@angular/core';
import { RingFirestoreService } from '../ring-firestore.service';

@Component({
  selector: 'app-mobile-player',
  templateUrl: './mobile-player.component.html',
  styleUrls: ['./mobile-player.component.sass']
})
export class MobilePlayerComponent {



  @Input() player: any;
  @Input() image: any = 'avatar1'
  
  
  constructor (public RingFirestoreService: RingFirestoreService) {}

  
}
