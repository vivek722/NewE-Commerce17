import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { WishlistService } from '../Client-Side-Service/wishlist.service';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrl: './user-wishlist.component.css'
})
export class UserWishlistComponent implements OnInit  {
  WishListTitle = "WishList Products";
  WishListData:any;
  constructor(private WishlistService:WishlistService,
    private Notification:NotificationServiceService
  ){}


  ngOnInit(): void {
   this.WishlistService.GetAllWishlistProducts().subscribe((res:any)=>{
      this.WishListData = res
     if(this.WishListData == null)
     {
        
     }    
}) 
}
  products: any;
  AddToCart(arg0: any) {
  throw new Error('Method not implemented.');
  }
  
}
