import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerResponse } from 'src/main';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  uname: string = '';
  pass: string = '';
  title: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    if (cookieService.get('user')) {
      router.navigate(['/profile']);
    }
  }

  register() {
    this.http
      .post<ServerResponse>('http://localhost:3000/register', {
        username: this.uname,
        password: this.pass,
      })
      .subscribe(
        (res) => {
          alert(res.message);
          if (res.success) {
            this.router.navigate(['/login']);
          }
        },
        (err) => {
          alert(err.error.message);
          console.error(err);
        }
      );
  }
}
