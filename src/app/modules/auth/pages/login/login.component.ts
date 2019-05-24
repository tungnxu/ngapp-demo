import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { tap, finalize, catchError, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};
  public errorMessage: string;
  public isLoading: boolean;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.isLoading = true;

    this.authenticationService.login(this.user).pipe(
      take(1),
      tap(() => { this.router.navigate(['/']); }, (err) => { this.errorMessage = err.error.error; }),
      finalize(() => { this.isLoading = false; })
    ).subscribe();
  }

}
