import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServerResponse } from 'src/main';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  uname: string = '';
  pass: string = '';
  title: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login() {
    this.http
      .post<ServerResponse>('http://localhost:3000/login', {
        username: this.uname,
        password: this.pass,
      })
      .subscribe(
        (res) => {
          if (res.success) {
            this.cookieService.put('user', this.uname);
            this.router.navigate(['/profile']);
          } else {
            alert(res.message);
          }
        },
        (err) => {
          alert('An error occurred while logging in.');
          console.error(err);
        }
      );
  }
}
