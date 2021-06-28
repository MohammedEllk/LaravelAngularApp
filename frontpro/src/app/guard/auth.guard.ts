import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/shared/auth.service';

// import the auth service here
// import { AuthService } from '../core/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // add the service we need
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
      
      // handle any redirects if a user isn't authenticated
      
      if (!this.auth.isLoggedIn()) {
        console.log("TEST TEST TEST TEST ");
        this.router.navigate(['login']); // go to login if not authenticated
        return false;
      }

      
      return true;
      
      
      
      
  }
}
