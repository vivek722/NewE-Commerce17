import { Component } from '@angular/core';
import { AdminSupplierServiceService } from '../Admin-All-Services/admin-supplier-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { SupplierPageNames } from '../../shared-modules/Enums/SupplierPagenameEnum.';
import * as pageSelector from '../../State/Selector/CustomerPagesetting.selector';
import { Store } from '@ngrx/store';
import { UpdateSupplierPageSettings } from '../../State/action/SupplierPageSettiing.action';
@Component({
  selector: 'app-add-supplier-page',
  templateUrl: './add-supplier-page.component.html',
  styleUrl: './add-supplier-page.component.css'
})
export class AddSupplierPageComponent {
  SupplierPagesData:any[]=[];


  AddsupplierPageForm!: FormGroup;
  constructor(
    private adminService:AdminSupplierServiceService,
     private fb:FormBuilder,
     public dialogref: MatDialogRef<AddSupplierPageComponent>,
     private notificationservice: NotificationServiceService ,
     private store:Store 
    ){}
    
    ngOnInit(): void {
      this.AddsupplierPageForm = this.fb.group({
        PageName: ['', Validators.required],
        IsPageActive: [],
        IsLoderActive: [],
        IsTosterActive: [],
        IsDeleteDialogActive:  [],
      });
      this.SupplierPagesData=Object.keys(SupplierPageNames);
      console.log(this.SupplierPagesData);
    }

    async AddSupplierPage() {
    var CustomerPage = this.AddsupplierPageForm.getRawValue();
    const result = this.getPageConfigSetting(CustomerPage.PageName);
    if (result)
      {
        this.store.dispatch(UpdateSupplierPageSettings({pageName: CustomerPage.PageName,PageActive:CustomerPage.IsPageActive,IsLoderActive:CustomerPage.IsLoderActive,IsTosterActive:CustomerPage.IsTosterActive,IsDeleteDialogActive:CustomerPage.IsDeleteDialogActive,editConfig:true,deleteConfig:false})); 
      }
      await this.adminService.AddSupplierPageSetting(CustomerPage).subscribe((res:any) => {
      if(res != null)
      {
        this.notificationservice.succuss(res.message);
      }
    })
    this.dialogref.close(true);
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
  CloseAddSupplierPageDailog() {
    this.dialogref.close(false);
  }   

}
