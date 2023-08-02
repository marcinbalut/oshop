import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeUserService {

  get username() {
    return localStorage.getItem('username');
  }

  get isLogged(): boolean {
    return (localStorage.getItem('username') !== null);
  }

  get isAdmin(): boolean {
    return JSON.parse(localStorage.getItem('isAdmin'));
  }

  login(username: string, password: string): boolean {

    if (username == 'admin' && password == '1234') {
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', 'true');

      return true;
    } else if (username == 'mosh' && password == '1234') {
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', 'false');

      return true;
    }
    
    return false;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
  }
}
