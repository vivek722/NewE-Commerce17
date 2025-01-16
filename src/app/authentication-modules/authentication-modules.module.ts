import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationModulesRoutingModule } from './authentication-modules-routing.module';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModulesRoutingModule,
    RouterModule,
    ReactiveFormsModule
    
  ]
})
export class AuthenticationModulesModule { }
