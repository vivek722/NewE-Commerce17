import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChackoutComponent } from './user-chackout/user-chackout.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import {canActivate } from '../authentication-modules/auth-guard.guard';
const routes: Routes = [
  {path:'',redirectTo:'Client/homePage',pathMatch:'full'},

  {path:'Client',component:UserHomeDesignComponent,
      children:[
        {path:'homePage',component:UserHomeComponent},
        {path:'Wishlist',component:UserWishlistComponent},
        {path:'AddToCart',component:UserAddToCartComponent},
      ]
    },
    {path:'AddSupplier',component:SupplierRegistrationComponent},
    {path:'auth',loadChildren: () => import('../authentication-modules/authentication-modules.module').then(m => m.AuthenticationModulesModule)},
    {path:'Supplier',loadChildren: () => import('../suplier-side-modules/suplier-side-modules.module').then(m => m.SuplierSideModulesModule)},
    {path:'Checkout',component:UserChackoutComponent,canActivate:[canActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideModulesRoutingModule { }
