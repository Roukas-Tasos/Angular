import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person2 = {
    givenName: "Petros",
    surName: "Petrou",
    age: 128,
    email:  "petr@PersonTableComponent.gr"
  }
}
