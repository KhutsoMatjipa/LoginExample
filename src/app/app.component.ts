import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  xxxx: boolean = true;
  constructor(private _router: Router) { }

  next: boolean = false;
  login: Array<{username: string, password: string}>  = [
      {username: 'kay', password: 'kay'},
      {username: 'kay2', password: 'kay2'},
      {username: 'kay3', password: 'kay3'}
  ];

  onClick(username: any, password: any): void {
    
    for (let i = 0; i < this.login.length; i++) {
      if (this.login[i].username === username && this.login[i].password === password) {
        alert("Success")
        this._router.navigate(['/personal']);
        this.xxxx = false;
       // this._router.navigateByUrl('/home');
        break;
      }else{

      }
    }
  }
}
