import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { Router } from '@angular/router';
import { UserRegisterService } from '../Authentication-Service/user-register.service';
import { RoleServiceService } from '../../shared-modules/Shared-Service/role-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  DataSource!: FormGroup;
  RoleData: any;
  
    constructor(
      private fb: FormBuilder,
      private  userregister: UserRegisterService,
      private Roleserver:RoleServiceService,
      private router: Router,
      private notificationservice: NotificationServiceService 
    ) {
   
    }
    ngOnInit(): void {
      this.Roleserver.GetAllRole().subscribe((res:any)=>
        this.RoleData =res
      );
  
      this.DataSource = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        PasswordHash: ['', Validators.required],
        RoleId: [4],
        Street: [''],
        City: [''],
        State: [''],
        ZipCode: ['']
      });
    }
  
    RegisterUser() {
      var registerData = this.DataSource.getRawValue();
      this.userregister.Register(registerData).subscribe((res: any) => {
        if(res != null) {
          this.notificationservice.succuss(res.message)
          this.router.navigate(['/UserHome/auth/login']);
        }
    });
  }
}
