import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMembershipHomeComponent } from './home/GroupMembership-home.component';
import { GroupMembershipNewComponent } from './new/GroupMembership-new.component';
import { GroupMembershipDetailComponent } from './detail/GroupMembership-detail.component';

const routes: Routes = [
  {path: '', component: GroupMembershipHomeComponent},
  { path: 'new', component: GroupMembershipNewComponent },
  { path: ':membership_id', component: GroupMembershipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GroupMembership-detail-permissions'
      }
    }
  }
];

export const GROUPMEMBERSHIP_MODULE_DECLARATIONS = [
    GroupMembershipHomeComponent,
    GroupMembershipNewComponent,
    GroupMembershipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupMembershipRoutingModule { }