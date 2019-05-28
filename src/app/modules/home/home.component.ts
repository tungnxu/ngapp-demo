import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // private item$: Observable<any>;
  constructor() { 
    // this.item$ = this.cloudFilestoreApiService.get('users');
  }

  ngOnInit() {
  }

  // public addItem(){
  //   this.cloudFilestoreApiService.create('users', {
  //     email: 'email@mail.com',
  //     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  //     password:'123456',
  //     username: 'email moi'
  //   })
  // }

}
