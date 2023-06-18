import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-drink-description',
  templateUrl: './drink-description.component.html',
  styleUrls: ['./drink-description.component.sass']
})
export class DrinkDescriptionComponent implements OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'You are now the question master. If you ask a player a question and they answer, they have to drink. If they answer the question with “Fuck you question master” then you have to drink.' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
    { title: 'Are you ready?', description: 'Pick the first card' },
  ];

  title = '';
  description = '';

  @Input() card!: string;


  ngOnChanges(): void {

      let string_array = this.card.split('_');
      let card_number = +string_array[0] - 1;
      this.title = this.cardAction[card_number].title
      this.description = this.cardAction[card_number].description
  }
}
