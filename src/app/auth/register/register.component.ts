import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    username: null,
    email: null,
    password: null,
  }


  public errorEmail = null;
  public errorUsername = null;
  public errorPassword = null;

  public results = null;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.errorEmail = null;
    this.errorUsername = null;
    this.errorPassword = null;
    this.auth.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
    console.log("submit");
  }

  handleResponse(data: any){
    this.results = data;
    // redirect user to login page
    this.router.navigate(['/auth/sign-in']);
    console.table(this.results);
  }

  handleError(error: any){
    this.errorEmail = error.error.email;
    this.errorUsername = error.error.username;
    this.errorPassword = error.error.password;
    this.form.password = '';
  }


  

  

}
