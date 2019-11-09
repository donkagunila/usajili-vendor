import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error/error404/error404.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './main/main.component';
import { BeforeLoginService } from './_services/before-login.service';
import { AfterLoginService } from './_services/after-login.service';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent
  },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AfterLoginService]
  },
  { 
    path: 'categories', 
    component: CategoryComponent,
    canActivate: [AfterLoginService]
  },
  { 
    path: 'auth/sign-in', 
    component: LoginComponent, 
    canActivate: [BeforeLoginService],
  },
  { 
    path: 'auth/sign-up', 
    component: RegisterComponent,
   
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AfterLoginService],
  },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
