import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  }

  public error = null;
  public errorEmail = null;


  public results = null;

  

  constructor(public auth: AuthService, 
              public token: TokenService, 
              private router: Router) { 
    
  }

  ngOnInit() {
   
  }

  onSubmit(){

    // change login button to loading


    // remove all errors from the page
    this.errorEmail = null;
    this.error = '';

    // post data to the login page
    this.auth.login(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },

      // handle any error
      error => this.handleError(error),
    )
   
  }

  handleResponse(data: any){
    this.results = data;

    // handle the token
    this.token.handle(data.access_token);
     // change auth status
     this.auth.changeAuthStatus(true);
    //  navigate to home
     this.router.navigateByUrl('/home');
     console.log('remove loader')
  }

  handleError(error: any){
    this.error = error.error.message;
    this.errorEmail = error.error.email;
    console.log(this.error);
    this.form.password = '';
  }

}
