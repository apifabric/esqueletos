import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EventParticipation-new',
  templateUrl: './EventParticipation-new.component.html',
  styleUrls: ['./EventParticipation-new.component.scss']
})
export class EventParticipationNewComponent {
  @ViewChild("EventParticipationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}