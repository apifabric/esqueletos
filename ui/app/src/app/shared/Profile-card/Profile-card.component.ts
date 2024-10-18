import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Profile-card.component.html',
  styleUrls: ['./Profile-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Profile-card]': 'true'
  }
})

export class ProfileCardComponent {


}