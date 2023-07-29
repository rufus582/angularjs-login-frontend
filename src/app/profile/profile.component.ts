import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  username: string = '';

  constructor(private router: Router, private cookieService: CookieService) {
    const user = cookieService.get('user');

    if (user) {
      this.username = user;
    } else {
      router.navigate(['/login']);
    }
  }

  logout() {
    this.cookieService.delete('user');
    this.router.navigate(['/login']);
  }
}
