import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('JWT')) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}