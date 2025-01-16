import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierSideNavbarComponent } from './supplier-side-navbar/supplier-side-navbar.component';
import { SupplierDeshboardComponent } from './supplier-deshboard/supplier-deshboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

const routes: Routes = [
  {path:'',redirectTo:'Supllier-Deshboard',pathMatch:'full'},
  {
   path: '', 
   component: SupplierSideNavbarComponent,
   children: [
     {
       path: 'Supllier-Deshboard',
       component: SupplierDeshboardComponent
     },
     {
       path: 'ProductDetails',
       component: ProductDetailsComponent
     },
     {
       path: 'InventoryDetails',
       component: InventoryDetailsComponent
     }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplierSideModulesRoutingModule { }
