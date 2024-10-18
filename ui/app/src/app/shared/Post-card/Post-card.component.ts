import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Post-card.component.html',
  styleUrls: ['./Post-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Post-card]': 'true'
  }
})

export class PostCardComponent {


}