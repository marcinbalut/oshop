import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeUserService {

  private _username: string;
  private password: string;
  private _isLogged: boolean;
  private _isAdmin: boolean;

  constructor() {
    this._username = '';
    this.password = '';
    this._isLogged = false;
    this._isAdmin = false;
  }

  get username() {
    return this._username;
  }

  get isLogged() {
    return this._isLogged;
  }

  get isAdmin() {
    return this._isAdmin;
  }

  login(username: string, password: string): boolean {

    if (username == 'admin' && password == '1234') {
      this._username = username;
      this.password = password;
      this._isLogged = true;
      this._isAdmin = true;
      alert('ADMIN')

      return true;
    } else if (username == 'mosh' && password == '1234') {
      this._username = username;
      this.password = password;
      this._isLogged = true;
      this._isAdmin = false;
      alert('Mosh')

      return true;
    } else {
      this._isLogged = false;
      this._isAdmin = false;
      alert('Piece of shit')

      return false;
    }
  }

  logout() {
    this._username = '';
    this.password = '';
    this._isLogged = false;
    this._isAdmin = false;
  }
}
