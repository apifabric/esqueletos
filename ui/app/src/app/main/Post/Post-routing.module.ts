import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostHomeComponent } from './home/Post-home.component';
import { PostNewComponent } from './new/Post-new.component';
import { PostDetailComponent } from './detail/Post-detail.component';

const routes: Routes = [
  {path: '', component: PostHomeComponent},
  { path: 'new', component: PostNewComponent },
  { path: ':post_id', component: PostDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Post-detail-permissions'
      }
    }
  },{
    path: ':post_id/Comment', loadChildren: () => import('../Comment/Comment.module').then(m => m.CommentModule),
    data: {
        oPermission: {
            permissionId: 'Comment-detail-permissions'
        }
    }
},{
    path: ':post_id/Reaction', loadChildren: () => import('../Reaction/Reaction.module').then(m => m.ReactionModule),
    data: {
        oPermission: {
            permissionId: 'Reaction-detail-permissions'
        }
    }
}
];

export const POST_MODULE_DECLARATIONS = [
    PostHomeComponent,
    PostNewComponent,
    PostDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }