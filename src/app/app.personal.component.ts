import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './app.interface';
import { MyService } from './app.myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.personalform.html',
  styles: ['.error {color: red;}'],
})
export class personalComponent {

  constructor(private _router: Router, public dataService: MyService) { }

  onNext(name: any, surname: any, email: any, cell: any, age: any, gender: any): void {
    this.dataService.name = name;
    this.dataService.surname = surname;
    this.dataService.cell = cell;
    this.dataService.email = email;
    this.dataService.age = age;
    this.dataService.gender = gender;

    console.log(name);
    this._router.navigate(['/work']);
  }
}
