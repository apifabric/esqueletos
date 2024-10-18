import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GroupMembership-new',
  templateUrl: './GroupMembership-new.component.html',
  styleUrls: ['./GroupMembership-new.component.scss']
})
export class GroupMembershipNewComponent {
  @ViewChild("GroupMembershipForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}