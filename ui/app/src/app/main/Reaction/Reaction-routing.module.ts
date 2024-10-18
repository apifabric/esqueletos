import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactionHomeComponent } from './home/Reaction-home.component';
import { ReactionNewComponent } from './new/Reaction-new.component';
import { ReactionDetailComponent } from './detail/Reaction-detail.component';

const routes: Routes = [
  {path: '', component: ReactionHomeComponent},
  { path: 'new', component: ReactionNewComponent },
  { path: ':reaction_id', component: ReactionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Reaction-detail-permissions'
      }
    }
  }
];

export const REACTION_MODULE_DECLARATIONS = [
    ReactionHomeComponent,
    ReactionNewComponent,
    ReactionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionRoutingModule { }