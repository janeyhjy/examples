import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) { }

  sendToken(token: string): void {
    sessionStorage.setItem('loggedToken', token);
  }

  getToken(): string {
    return sessionStorage.getItem('loggedToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  logout(): void {
    sessionStorage.removeItem('loggedToken');
    this.router.navigate(['login']);
  }
}
