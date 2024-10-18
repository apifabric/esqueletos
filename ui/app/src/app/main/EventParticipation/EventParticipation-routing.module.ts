import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventParticipationHomeComponent } from './home/EventParticipation-home.component';
import { EventParticipationNewComponent } from './new/EventParticipation-new.component';
import { EventParticipationDetailComponent } from './detail/EventParticipation-detail.component';

const routes: Routes = [
  {path: '', component: EventParticipationHomeComponent},
  { path: 'new', component: EventParticipationNewComponent },
  { path: ':participation_id', component: EventParticipationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EventParticipation-detail-permissions'
      }
    }
  }
];

export const EVENTPARTICIPATION_MODULE_DECLARATIONS = [
    EventParticipationHomeComponent,
    EventParticipationNewComponent,
    EventParticipationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventParticipationRoutingModule { }