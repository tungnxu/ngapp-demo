import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authen-app';
  public authenAppDB$: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.authenAppDB$ = db.collection('users').valueChanges();
  }
}
