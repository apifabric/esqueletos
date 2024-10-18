import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupHomeComponent } from './home/Group-home.component';
import { GroupNewComponent } from './new/Group-new.component';
import { GroupDetailComponent } from './detail/Group-detail.component';

const routes: Routes = [
  {path: '', component: GroupHomeComponent},
  { path: 'new', component: GroupNewComponent },
  { path: ':group_id', component: GroupDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Group-detail-permissions'
      }
    }
  },{
    path: ':group_id/GroupMembership', loadChildren: () => import('../GroupMembership/GroupMembership.module').then(m => m.GroupMembershipModule),
    data: {
        oPermission: {
            permissionId: 'GroupMembership-detail-permissions'
        }
    }
}
];

export const GROUP_MODULE_DECLARATIONS = [
    GroupHomeComponent,
    GroupNewComponent,
    GroupDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }