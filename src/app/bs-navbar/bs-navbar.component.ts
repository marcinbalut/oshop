import { Component } from '@angular/core';
import { FakeUserService } from 'src/services/fake-user.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public userService: FakeUserService) {}

  logout() {
    this.userService.logout();
  }

}
