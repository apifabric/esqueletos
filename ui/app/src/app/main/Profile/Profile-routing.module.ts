import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileHomeComponent } from './home/Profile-home.component';
import { ProfileNewComponent } from './new/Profile-new.component';
import { ProfileDetailComponent } from './detail/Profile-detail.component';

const routes: Routes = [
  {path: '', component: ProfileHomeComponent},
  { path: 'new', component: ProfileNewComponent },
  { path: ':profile_id', component: ProfileDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Profile-detail-permissions'
      }
    }
  }
];

export const PROFILE_MODULE_DECLARATIONS = [
    ProfileHomeComponent,
    ProfileNewComponent,
    ProfileDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }