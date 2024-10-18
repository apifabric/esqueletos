import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Comment', loadChildren: () => import('./Comment/Comment.module').then(m => m.CommentModule) },
    
        { path: 'Event', loadChildren: () => import('./Event/Event.module').then(m => m.EventModule) },
    
        { path: 'EventParticipation', loadChildren: () => import('./EventParticipation/EventParticipation.module').then(m => m.EventParticipationModule) },
    
        { path: 'Friendship', loadChildren: () => import('./Friendship/Friendship.module').then(m => m.FriendshipModule) },
    
        { path: 'Group', loadChildren: () => import('./Group/Group.module').then(m => m.GroupModule) },
    
        { path: 'GroupMembership', loadChildren: () => import('./GroupMembership/GroupMembership.module').then(m => m.GroupMembershipModule) },
    
        { path: 'Message', loadChildren: () => import('./Message/Message.module').then(m => m.MessageModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Post', loadChildren: () => import('./Post/Post.module').then(m => m.PostModule) },
    
        { path: 'Profile', loadChildren: () => import('./Profile/Profile.module').then(m => m.ProfileModule) },
    
        { path: 'Reaction', loadChildren: () => import('./Reaction/Reaction.module').then(m => m.ReactionModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }