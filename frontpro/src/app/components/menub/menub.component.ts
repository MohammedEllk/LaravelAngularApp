import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { TokenService } from '../../services/shared/token.service';
import { AuthStateService } from '../../services/shared/auth-state.service';


@Component({
  selector: 'app-menub',
  templateUrl: './menub.component.html',
  styleUrls: ['./menub.component.css']
})
export class MenubComponent implements OnInit{

  isSignedIn?: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private auth: AuthStateService,
    public router: Router,
    public token: TokenService) {}

    ngOnInit() {
      this.auth.userAuthState.subscribe(val => {
          this.isSignedIn = val;
      });
    }
  
    // Signout
    signOut() {
      this.auth.setAuthState(false);
      this.token.removeToken();
      this.router.navigate(['login']);
    }

}
