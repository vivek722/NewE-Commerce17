import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideModulesRoutingModule } from './client-side-modules-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { ProductDataComponent } from './product-data/product-data.component';



import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModulesModule } from "../shared-modules/shared-modules.module";
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { UserChackoutComponent } from './user-chackout/user-chackout.component';
@NgModule({
  declarations: [
    UserHeaderComponent,
    UserFooterComponent,
    UserHomeComponent,
    UserHomeDesignComponent,
    UserAddToCartComponent,
    SupplierRegistrationComponent,
    UserWishlistComponent,
    ProductDataComponent,
    UserChackoutComponent
  ],
  imports: [
    CommonModule,
    ClientSideModulesRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    SharedModulesModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
  ]
})
export class ClientSideModulesModule { }
