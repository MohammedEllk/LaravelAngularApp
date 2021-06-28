import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


// User interface
export class User {
  id? : number;
  name?: String;
  email?: String;
  password?: String;
  password_confirmation?: String;
  entity_id?:number;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    
   }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
  isLoggedIn() {
    return false;
  }
  isSuperAdmin() {
    return true;
  }

}