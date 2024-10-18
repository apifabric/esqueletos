import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendshipHomeComponent } from './home/Friendship-home.component';
import { FriendshipNewComponent } from './new/Friendship-new.component';
import { FriendshipDetailComponent } from './detail/Friendship-detail.component';

const routes: Routes = [
  {path: '', component: FriendshipHomeComponent},
  { path: 'new', component: FriendshipNewComponent },
  { path: ':friendship_id', component: FriendshipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Friendship-detail-permissions'
      }
    }
  }
];

export const FRIENDSHIP_MODULE_DECLARATIONS = [
    FriendshipHomeComponent,
    FriendshipNewComponent,
    FriendshipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendshipRoutingModule { }