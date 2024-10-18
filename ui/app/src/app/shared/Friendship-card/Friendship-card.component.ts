import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Friendship-card.component.html',
  styleUrls: ['./Friendship-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Friendship-card]': 'true'
  }
})

export class FriendshipCardComponent {


}