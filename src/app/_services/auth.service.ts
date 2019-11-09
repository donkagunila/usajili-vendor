import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();


  api_url = 'http://3.122.199.78:8001/api/auth/'

  constructor(public http:HttpClient, private token: TokenService) { 
    
    
  }

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }




  login(formData: any) {
    return this.http.post(this.api_url + 'login', formData);
  }


  register(formData: any) {
    return this.http.post(this.api_url + 'register', formData);
  }
}
