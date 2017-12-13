import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'users'})

export class usersPipe implements PipeTransform {
  transform(value: any, args:string[]) : any {
    let users = [];
    for (let x in value) {
        users.push({x: x, value: value[x]});
    }
    return users;
  }
}