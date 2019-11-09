import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   public loggedIn : boolean;

  constructor(private auth: AuthService, public router: Router, private token : TokenService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(
      (value: boolean) => this.loggedIn = value
    );

  }

  logout(Event : MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/auth/sign-in');
  }

}
