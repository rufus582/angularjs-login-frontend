import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { ServerResponse } from 'src/main';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  username: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    // http.get<ServerResponse>('http://localhost:3000/profile').subscribe(
    //   (res) => {
    //     if (res.success) {
    //       this.username = res.message;
    //     } else {
    //       router.navigate(['/login']);
    //     }
    //   },
    //   (err) => {
    //     router.navigate(['/login']);
    //     console.error(err);
    //   }
    // );
    const user = cookieService.get('user');

    if (user) {
      this.username = user;
    } else {
      router.navigate(['/login']);
    }
  }
}
