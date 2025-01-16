import { Component, OnInit } from '@angular/core';
import { AdminSupplierServiceService } from '../../admin-side-modules/Admin-All-Services/admin-supplier-service.service';
import { AdminCustomerServiceService } from '../../admin-side-modules/Admin-All-Services/admin-customer-service.service';
import { Store } from '@ngrx/store';
import { customerPageNames } from '../../shared-modules/Enums/CustomerPagename.Enum';
import { AddCustomerPageSettings, UpdateCustomerPageSettings } from '../../State/action/CustomerPageSetting.action';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent  implements OnInit{

  Title : string | undefined;
  TreandingTitle="Trending Products"
  Filter : string | undefined;
  FilterData:any[]=[];
  allSuppplierPageData:any[]=[];
 pageConfigresult:any;
  allCustomerPagedata:any[]=[];
  
  constructor(private AdminSupplierservie:AdminSupplierServiceService,
    private Adminservice:AdminCustomerServiceService,
    private store:Store
  ){}
  ngOnInit(): void {
      this.AdminSupplierservie.getAllsupplierPage().subscribe((res:any) =>{
        this.allSuppplierPageData.push(res.data);
        console.log(this.allSuppplierPageData);
      })
      this.Adminservice.getAllCustomerPageSetting().subscribe((res:any) =>{
        this.allCustomerPagedata.push(res.data);    
      })
  }
  
  }

