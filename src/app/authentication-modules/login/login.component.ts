import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Authentication-Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authservice: AuthenticationService,
    private formbuilder: FormBuilder,
    private route: Router,
    private notificationservice: NotificationServiceService 
  ) {}

  DataSource: FormGroup | null = null;

  ngOnInit(): void {
    this.DataSource = this.formbuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  LoginUser() {
    if (this.DataSource?.valid) {
      const LoginData = this.DataSource.getRawValue();
      this.authservice.login(LoginData).subscribe((res: any) => {
      if(res != null)
      {
       var RoleName = this.authservice.getToken()
       this.RoleBaseNavigation(RoleName)
    }
      });
    }
  }
 async  signInWithGoogle() {
    try {
      const user = await this.authservice.googleSignIn();
      if (user != null && typeof user.email === 'string') {
          const role = await this.authservice.checkRole(user.email);
          this.RoleBaseNavigation(role);
      }
    } catch (error) {
      this.notificationservice.Error("Some error occur on Sign in With google");
      console.error('Error during Google Sign-In:', error);
    }
  }

  RoleBaseNavigation(RoleName : any)
  {
    if(RoleName == "Customer")
      {
        this.route.navigate(['/UserHome/Client/homePage']);
      }
      else if(RoleName == "Supplier")
      {
        this.route.navigate(['/UserHome/auth/Supplier/Supllier-Deshboard']);
      }
      else if(RoleName == "Admin")
        {
          this.route.navigate(['/UserHome/auth/Admin/Admin-Deshboard']);
        }
          this.notificationservice.succuss("login scussfully")
      }
}
