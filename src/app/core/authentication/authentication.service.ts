import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  private authUrl = 'https://reqres.in/api';
  private loggedIn = false;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser$: Observable<any>;


  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject.asObservable();
    console.log('khoi tao service authen lan 1');
   }

   public get currentUserValue(): any {
     return this.currentUserSubject.value;
   }

  public login(user: any): Observable<any> {
    return this.httpClient.post(`${this.authUrl}/login`, user).pipe(tap(token => {
      if (token) {
        const object = {email : user.email, token: token.token};
        localStorage.setItem('currentUser', JSON.stringify(object));
        this.currentUserSubject.next(object);
        this.currentUserSubject.subscribe(data => console.log(data.email + 'gia trij'));
        this.currentUser$ = this.currentUserSubject.asObservable();
      }
    }));
    // return of(1);
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
