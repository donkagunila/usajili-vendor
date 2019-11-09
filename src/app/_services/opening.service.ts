import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'here',
  })
};



@Injectable({
  providedIn: 'root'
})
export class OpeningService {

  url: 'http://3.122.199.78:8001/api/categories/list';
  token: any;



  constructor(public http: HttpClient, public tokenservice: TokenService) { }



  getCategories() {

    // get the token
    this.token = 'bearer ' + this.tokenservice.get();

    // add token to http headers
    httpOptions.headers = httpOptions.headers.set('Authorization', this.token);
    
    // get data from api
    return this.http.get('http://3.122.199.78:8001/api/categories/list', httpOptions);
  }

}
