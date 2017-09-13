import { PeopleServiceProvider } from './../../providers/people-service/people-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PeopleServiceProvider]
})

export class HomePage {
  public peoples: any;

  constructor(public peopleService: PeopleServiceProvider) {
    this.peoples = []; 
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load().subscribe(data => {
      console.log('data',data);
      this.peoples = data;
    });
  }
}
