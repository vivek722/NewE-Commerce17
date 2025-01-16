import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../Client-Side-Service/add-to-cart.service';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { UserInformationService } from '../Client-Side-Service/user-information.service';
import { AddToCart } from '../Client-side-models/AddToCart';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrl: './user-add-to-cart.component.css'
})
export class UserAddToCartComponent implements OnInit {

  cartItems:any =[];
  UserTokenData:any;;
  totalAmount: number = 0;
  productOrignalprice:number = 0;
  productActualprice:number = 0;
  discount: number = 0;
  finalPrice: number =0;
  isloding: boolean = false;

  constructor(private addToCartService: AddToCartService,
    private notification:NotificationServiceService,
    private getUserInformation:UserInformationService
  ) { }
  ngOnInit(): void {
    this.UserTokenData =  this.getUserInformation.getDataFromToken();
    this.getAllCartItems();
  }
    increaseQuantity(index: number) {
      this.cartItems[index].quantity++;
      this.cartItems[index].product.productOrignalprice = this.cartItems[index].product.productOrignalprice * this.cartItems[index].quantity
      this.cartItems[index].product.productActualprice = this.cartItems[index].product.productActualprice * this.cartItems[index].quantity
      this.updeteCartAmount()
    }
    removeItem(products_id: number) {
      this.addToCartService.DeleteProductInCart(products_id).subscribe((res: any) => {
        if(res.status == "Success") {
          this.notification.succuss(res.message);
          this.getAllCartItems();
        }
      });
    }
    decreaseQuantity(index: number) {
      if (this.cartItems[index].quantity > 1)  {
        this.cartItems[index].quantity--;
        this.cartItems[index].product.productOrignalprice = this.cartItems[index].product.productOrignalprice * this.cartItems[index].quantity
        this.cartItems[index].product.productActualprice = this.cartItems[index].product.productActualprice * this.cartItems[index].quantity
        this.updeteCartAmount()
      }
      else {
        this.notification.warning("Cannot decrease quantity less than 1");
      }
    }
    getAllCartItems() {
      this.isloding = true;
      this.addToCartService.GetAllCartProducts(this.UserTokenData.Id).subscribe((res:AddToCart)=>{
        this.cartItems = res.data;
        this.updeteCartAmount()
        console.log(this.cartItems);
      });
      setTimeout(() => {
          this.isloding = false;
      }, 2000);
    }
    updeteCartAmount()
    {
      this.cartItems.forEach((item: any) => {
        this.totalAmount += item.product.productOrignalprice * item.quantity;
        this.discount += (item.product.productOrignalprice - item.product.productActualprice) * item.quantity;
        this.finalPrice = this.totalAmount - this.discount;
      });
    }
}
