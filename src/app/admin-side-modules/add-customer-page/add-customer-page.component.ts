import { Component, OnInit } from '@angular/core';
import { AdminCustomerServiceService } from '../Admin-All-Services/admin-customer-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { customerPageNames } from '../../shared-modules/Enums/CustomerPagename.Enum';
import { UpdateCustomerPageSettings } from '../../State/action/CustomerPageSetting.action';
import * as pageSelector from '../../State/Selector/CustomerPagesetting.selector';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html',
  styleUrl: './add-customer-page.component.css'
})
export class AddCustomerPageComponent implements OnInit{
  CustomerPageData:any
  AddCustomerPageForm!: FormGroup;
  constructor(
    private adminService:AdminCustomerServiceService,
     private fb:FormBuilder,
     public dialog: MatDialogRef<AddCustomerPageComponent>,
     private notificationservice: NotificationServiceService,
      private store:Store 
    ){}
    
    ngOnInit(): void {
      this.AddCustomerPageForm = this.fb.group({
        PageName: ['', Validators.required],
        IsPageActive: [],
        IsLoderActive: [],
        IsTosterActive: [],
        IsDeleteDialogActive:  [],
      });
      this.CustomerPageData=Object.keys(customerPageNames);
      console.log(this.CustomerPageData);
    }
  
    async AddCustomerPage() {
     
      
   var CustomerPage = this.AddCustomerPageForm.getRawValue();
   console.log(CustomerPage);
   const result = this.getPageConfigSetting(CustomerPage.PageName);
    if (result)
    {
      this.store.dispatch(UpdateCustomerPageSettings({pageName: CustomerPage.PageName,PageActive:CustomerPage.IsPageActive,IsLoderActive:CustomerPage.IsLoderActive,IsTosterActive:CustomerPage.IsTosterActive,IsDeleteDialogActive:CustomerPage.IsDeleteDialogActive,editConfig:true,deleteConfig:false})); 
    }
    await this.adminService.AddCustomerPageSetting(CustomerPage).subscribe((res:any) => {
    if(res != null){
        this.notificationservice.succuss(res.message);
      }
    })
    this.dialog.close(true);
  }
  getPageConfigSetting(Home: string) {
    var data;
    if (Home) {
      this.store.select(pageSelector.getPageConfigSettingByPageName(Home)).subscribe((res: any) => {
        data = res;
      })
    }
    return data;
  }
  CloseAddCustomerDailog() {
    this.dialog.close(false);
  }   
}
