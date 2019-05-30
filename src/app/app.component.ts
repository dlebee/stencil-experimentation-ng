import { Component, Input } from '@angular/core';
import { IPerson } from '@poweredsoft/startui/dist/types/components/person-card/IPerson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StartUiApp';
  
  person: IPerson = {
    firstName: 'David',
    lastName: 'Lebee'
  }

  onSharing($event) {
    alert($event.detail.firstName);
  }

  changeFirstName() {
    const newFirstName = prompt('New first name', this.person.firstName);
    this.firstName = newFirstName;
  }

  changeLastName() {
    const newLastName = prompt('New last name', this.person.lastName);
    this.lastName = newLastName;
  }

  get firstName() {
    return this.person.firstName;
  }

  set firstName(val: string) {
    this.person = {... this.person, firstName: val};
  }

  get lastName() {
    return this.person.lastName;
  }

  set lastName(val: string) {
    this.person = {... this.person, lastName: val};
  }
}
