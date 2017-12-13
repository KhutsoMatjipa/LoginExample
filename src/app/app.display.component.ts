import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './app.interface';
import { MyService } from './app.myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.display.html',
})
export class displayComponent {

  user: User = {
    name: '',
    surname: '',
    cell: '',
    email: '',
    age: '',
    gender: '',
    employer: '',
    title: '',
    desc: ''
  }

  constructor(private _router: Router, public dataService: MyService) {
    this.user.name = this.dataService.name;
    this.user.surname = this.dataService.surname;
    this.user.cell = this.dataService.cell;
    this.user.email = this.dataService.email;
    this.user.age = this.dataService.age;
    this.user.gender = this.dataService.gender;
    this.user.employer = this.dataService.employer;
    this.user.title = this.dataService.title;
    this.user.desc = this.dataService.desc;
  }

}
