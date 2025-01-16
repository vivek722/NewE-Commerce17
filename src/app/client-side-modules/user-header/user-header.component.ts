import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication-modules/Authentication-Service/authentication.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit  {
  Token: any;

  constructor(private router:Router,private authService:AuthenticationService){}
  ngOnInit(): void {
    this.Token = this.authService.Userislogin();
  }
}
