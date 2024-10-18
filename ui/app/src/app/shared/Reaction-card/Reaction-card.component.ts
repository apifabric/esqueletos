import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Reaction-card.component.html',
  styleUrls: ['./Reaction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Reaction-card]': 'true'
  }
})

export class ReactionCardComponent {


}