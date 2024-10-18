import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FRIENDSHIP_MODULE_DECLARATIONS, FriendshipRoutingModule} from  './Friendship-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FriendshipRoutingModule
  ],
  declarations: FRIENDSHIP_MODULE_DECLARATIONS,
  exports: FRIENDSHIP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FriendshipModule { }