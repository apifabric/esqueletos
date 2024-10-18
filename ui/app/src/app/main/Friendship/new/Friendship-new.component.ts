import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Friendship-new',
  templateUrl: './Friendship-new.component.html',
  styleUrls: ['./Friendship-new.component.scss']
})
export class FriendshipNewComponent {
  @ViewChild("FriendshipForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}