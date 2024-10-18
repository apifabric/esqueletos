import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GroupMembership-card.component.html',
  styleUrls: ['./GroupMembership-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GroupMembership-card]': 'true'
  }
})

export class GroupMembershipCardComponent {


}