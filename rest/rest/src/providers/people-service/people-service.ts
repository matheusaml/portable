import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {
  
  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  load() {
   console.log('teste');
     return this.http.get('https://jsonplaceholder.typicode.com/albums')
         .map(res => res.json());
    };


}
