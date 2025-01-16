import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuplierSideModulesRoutingModule } from './suplier-side-modules-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AddInvenoryComponent } from './add-invenory/add-invenory.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SupplierSideNavbarComponent } from './supplier-side-navbar/supplier-side-navbar.component';
import { SupplierDeshboardComponent } from './supplier-deshboard/supplier-deshboard.component';


import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from "../shared-modules/shared-modules.module";

@NgModule({
  declarations: [
    AddProductComponent,
    AddInvenoryComponent,
    InventoryDetailsComponent,
    ProductDetailsComponent,
    SupplierSideNavbarComponent,
    SupplierDeshboardComponent
  ],
  imports: [
    CommonModule,
    SuplierSideModulesRoutingModule,
    SharedModulesModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class SuplierSideModulesModule { }
