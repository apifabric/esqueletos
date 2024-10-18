import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':user_id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Comment', loadChildren: () => import('../Comment/Comment.module').then(m => m.CommentModule),
    data: {
        oPermission: {
            permissionId: 'Comment-detail-permissions'
        }
    }
},{
    path: ':user_id/EventParticipation', loadChildren: () => import('../EventParticipation/EventParticipation.module').then(m => m.EventParticipationModule),
    data: {
        oPermission: {
            permissionId: 'EventParticipation-detail-permissions'
        }
    }
},{
    path: ':friend_id/Friendship', loadChildren: () => import('../Friendship/Friendship.module').then(m => m.FriendshipModule),
    data: {
        oPermission: {
            permissionId: 'Friendship-detail-permissions'
        }
    }
},{
    path: ':user_id/Friendship', loadChildren: () => import('../Friendship/Friendship.module').then(m => m.FriendshipModule),
    data: {
        oPermission: {
            permissionId: 'Friendship-detail-permissions'
        }
    }
},{
    path: ':user_id/GroupMembership', loadChildren: () => import('../GroupMembership/GroupMembership.module').then(m => m.GroupMembershipModule),
    data: {
        oPermission: {
            permissionId: 'GroupMembership-detail-permissions'
        }
    }
},{
    path: ':receiver_id/Message', loadChildren: () => import('../Message/Message.module').then(m => m.MessageModule),
    data: {
        oPermission: {
            permissionId: 'Message-detail-permissions'
        }
    }
},{
    path: ':sender_id/Message', loadChildren: () => import('../Message/Message.module').then(m => m.MessageModule),
    data: {
        oPermission: {
            permissionId: 'Message-detail-permissions'
        }
    }
},{
    path: ':user_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
},{
    path: ':user_id/Post', loadChildren: () => import('../Post/Post.module').then(m => m.PostModule),
    data: {
        oPermission: {
            permissionId: 'Post-detail-permissions'
        }
    }
},{
    path: ':user_id/Profile', loadChildren: () => import('../Profile/Profile.module').then(m => m.ProfileModule),
    data: {
        oPermission: {
            permissionId: 'Profile-detail-permissions'
        }
    }
},{
    path: ':user_id/Reaction', loadChildren: () => import('../Reaction/Reaction.module').then(m => m.ReactionModule),
    data: {
        oPermission: {
            permissionId: 'Reaction-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }