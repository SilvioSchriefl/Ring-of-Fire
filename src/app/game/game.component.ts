import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  pick_card_animation = false;
  put_on_table_animation = false;
  d_none = true;
  top_card: string = '1_of_clubs.png';
  game!: Game; 

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game;
  }

  pickCard() {
    this.top_card = this.game.stack.pop()!;
    this.pick_card_animation = true;
    setTimeout(() => this.put_on_table_animation = true, 500);
    setTimeout(() => this.d_none = false, 1800);
    setTimeout(() => this.d_none = true, 2000);
    setTimeout(() => this.put_on_table_animation = false, 2000);
    setTimeout(() => this.pick_card_animation = false, 1900);
    this.game.played_cards.push(this.top_card)
    console.log(this.game.played_cards)
  }

}
