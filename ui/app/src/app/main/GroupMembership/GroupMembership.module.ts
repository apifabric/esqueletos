import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GROUPMEMBERSHIP_MODULE_DECLARATIONS, GroupMembershipRoutingModule} from  './GroupMembership-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GroupMembershipRoutingModule
  ],
  declarations: GROUPMEMBERSHIP_MODULE_DECLARATIONS,
  exports: GROUPMEMBERSHIP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupMembershipModule { }