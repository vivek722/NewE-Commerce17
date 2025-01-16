import {inject} from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from './Authentication-Service/authentication.service';

export const canActivate=()=>{
  const AuthnService = inject(AuthenticationService);
  const Route = inject(Router);

  if(AuthnService.Userislogin()){
    return true;
  }
  return false;
}

export const canDeactivate=()=>{
  const AuthnService = inject(AuthenticationService);
  const Route = inject(Router);
  if(!AuthnService.Userislogin()){
    return true;
  }
  return false;
}