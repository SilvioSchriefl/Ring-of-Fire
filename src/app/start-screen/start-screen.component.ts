import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RingFirestoreService } from '../ring-firestore.service';
import { Game } from 'src/models/game';





@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.sass']
})
export class StartScreenComponent {



  constructor(private router: Router, public RingFirestoreService: RingFirestoreService) { }

  newGame() {
    this.RingFirestoreService.createGame();    
  }
}
