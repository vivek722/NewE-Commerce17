import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WishlistService } from '../Client-Side-Service/wishlist.service';
import { AddToCartService } from '../Client-Side-Service/add-to-cart.service';
import { UserInformationService } from '../Client-Side-Service/user-information.service';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { ProductServiceService } from '../../suplier-side-modules/Supplier-Service/product-service.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent implements OnInit {
  products: any;
  AddToCartproducts!: FormGroup;
  Wishlistproducts!: FormGroup;
  WishListData: any[] = [];
  userId:any;
  @Input() Title: string | undefined;
  WishData: any;
  isloding: boolean = false;

  constructor(
    private productService: ProductServiceService,
    private addToCartService: AddToCartService,
    private wishlistService: WishlistService,
    private formBuilder: FormBuilder,
    private userInformationService: UserInformationService,
    private notificationservice: NotificationServiceService  
  ) {}

  ngOnInit(): void {
    this.isloding = true;
    this.userId =  this.userInformationService.getDataFromToken();
    if(this.Title == "WishList Products")
    {
      this.wishlistService.GetAllWishlistProducts().subscribe((res: any) => {
        this.products = res.data;
        if (this.products) {
        }
      }).add( () => {
        setTimeout(() => {
          this.isloding=false;
        }, 2000);
      })
    }
    else if(this.Title == "Trending Products")
    {
    this.productService.GetAllProducts().subscribe((res: any) => {
      this.products = res.data;
      if (this.products) {
      }
    }).add( () => {
      setTimeout(() => {
        this.isloding=false;
      }, 2000);
    })
    }
    
  }

  AddToWishlist(ProductId: number) {
    this.Wishlistproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserEmail: this.userId.email
    });
    this.wishlistService.isProductInWishlist(ProductId, this.userId.email).subscribe((res: any) => {
      if (res.message != "Empty") {
        this.notificationservice.warning(res.message)
      } else {
        this.wishlistService.AddWishlistProduct(this.Wishlistproducts.value).subscribe((res: any) => {
          if (res.status == "Success") {
            this.WishListData.push(this.Wishlistproducts.value); 
            this.notificationservice.succuss(res.message)
          }
          else
          {
            this.notificationservice.Error(res.message);
          }
        });
      }
    });
  }

  AddToCart(ProductId: number) {
    this.AddToCartproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserEmail: this.userId.email,
      Quantity: [1]
    });
    this.addToCartService.isProductInCart(ProductId, this.userId.email).subscribe((res: any) => {
      if (res.message != "Empty") {
        this.notificationservice.warning(res.message);
      } else {
        this.addToCartService.AddCartProduct(this.AddToCartproducts.value).subscribe((res: any) => {
          if (res.status == "Success") {
            this.WishListData.push(this.AddToCartproducts.value); 
            this.notificationservice.succuss(res.message);
          }
          else
          {
            this.notificationservice.Error(res.message);
          }
        });
      }
    });
  }

}
