import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSideNavbarComponent } from './admin-side-navbar/admin-side-navbar.component';
import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { CustomerPageSettingComponent } from './customer-page-setting/customer-page-setting.component';
import { SupplierPageSettingComponent } from './supplier-page-setting/supplier-page-setting.component';

const routes: Routes = [
  {path:'',redirectTo:'Admin-Deshboard',pathMatch:'full'},
  {
   path: '', 
   component: AdminSideNavbarComponent,
   children: [
     {
       path: 'Admin-Deshboard',
       component: AdminDeshboardComponent
     },
     {
       path: 'CustomerPageSetting',
       component: CustomerPageSettingComponent
     },
     {
      path: 'supplierPageSetting',
      component: SupplierPageSettingComponent
    },
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSideModulesRoutingModule { }
