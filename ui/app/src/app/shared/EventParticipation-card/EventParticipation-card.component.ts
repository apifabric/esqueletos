import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EventParticipation-card.component.html',
  styleUrls: ['./EventParticipation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EventParticipation-card]': 'true'
  }
})

export class EventParticipationCardComponent {


}