import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FakeUserService } from 'src/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;
  isLogged = false;
  isAdmin = false;

  constructor(
    private router: Router,
    private userService: FakeUserService) { }

  login(user) {
    if (user) {
      if (this.userService.login(user.username, user.password)) {
        this.router.navigate(['/']);
      }
    }

  }
}
