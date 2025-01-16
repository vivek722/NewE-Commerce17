import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddToCartService } from '../Client-Side-Service/add-to-cart.service';
import { UserInformationService } from '../Client-Side-Service/user-information.service';

@Component({
  selector: 'app-user-chackout',
  templateUrl: './user-chackout.component.html',
  styleUrl: './user-chackout.component.css'
})
export class UserChackoutComponent implements OnInit{
  shippingForm: any;
  paymentForm: FormGroup;
  UserTokendata:any;
  UserData:any;
  UserProductDetail:any;
  products = [
    { name: 'Product 1', quantity: 2, price: 50 },
    { name: 'Product 2', quantity: 1, price: 30 },
  ];
  totalAmount = this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  UserName: any;

  constructor(private fb: FormBuilder,
    private getUserinformation:UserInformationService,
    private addToCartService:AddToCartService) {
  

    this.paymentForm = this.fb.group({
      paymentMethod: ['credit'],
      cardNumber: [''],
      expiryDate: [''],
      cvv: [''],
    });
  }
 
  ngOnInit(): void {
    this.UserTokendata = this.getUserinformation.getDataFromToken();
    this.getUserinformation.GetUserInformation(this.UserTokendata.Id).subscribe((res:any)=> {
    this.UserData = res;
  });
  this.UserProductDetail = this.addToCartService.GetAllCartProducts(this.UserTokendata.Id).subscribe((res:any)=>{
    this.UserProductDetail = res;
  });
  }
  placeOrder() {
    console.log('Order placed successfully!');
  }

}
