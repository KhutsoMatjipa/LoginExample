import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './app.interface';
import { MyService } from './app.myservice.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.workhistoryform.html',
    styles: ['.error {color: red;}'],
})
export class workComponent {

    constructor(private _router: Router, public dataService: MyService) { }

    name: '';
    onNext(employer: any, title: any, desc: any) {
        this.name = this.dataService.name;
        this.dataService.employer = employer;
        this.dataService.title = title;
        this.dataService.desc = desc;
        console.log(employer);
        this._router.navigate(['/display']);
    }
}
