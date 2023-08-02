import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { FakeUserService } from 'src/services/fake-user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private userService: FakeUserService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (!this.userService.isAdmin) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    return true;    
  }
}
