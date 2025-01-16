import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSideModulesRoutingModule } from './admin-side-modules-routing.module';
import { AddCustomerPageComponent } from './add-customer-page/add-customer-page.component';
import { AddSupplierPageComponent } from './add-supplier-page/add-supplier-page.component';
import { CustomerPageSettingComponent } from './customer-page-setting/customer-page-setting.component';
import { SupplierPageSettingComponent } from './supplier-page-setting/supplier-page-setting.component';
import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { AdminSideNavbarComponent } from './admin-side-navbar/admin-side-navbar.component';


import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
@NgModule({
  declarations: [
    AddCustomerPageComponent,
    AddSupplierPageComponent,
    CustomerPageSettingComponent,
    SupplierPageSettingComponent,
    AdminDeshboardComponent,
    AdminSideNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminSideModulesRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModulesModule,
    MatButtonToggleModule
  ]
})
export class AdminSideModulesModule { }
