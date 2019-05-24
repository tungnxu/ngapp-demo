import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: any;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser$.subscribe(user => this.user = user);
   }

  ngOnInit() {
  }

  public logout(): void {
    this.authenticationService.logout();
  }

}
