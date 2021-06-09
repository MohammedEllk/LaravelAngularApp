import { Component,Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { TokenService } from './services/shared/token.service';
import { AuthStateService } from './services/shared/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'SiftLook';
  isSignedIn?: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
  ) {
  }

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
