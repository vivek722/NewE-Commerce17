import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../suplier-side-modules/Supplier-Service/product-service.service';
import { InventoryServiceService } from '../../suplier-side-modules/Supplier-Service/inventory-service.service';

@Component({
  selector: 'app-admin-deshboard',
  templateUrl: './admin-deshboard.component.html',
  styleUrl: './admin-deshboard.component.css'
})
export class AdminDeshboardComponent  implements OnInit {
  TotalProducts: number =0
  TotalOrders: number =0
  TotalWishlistProduct: number =0
  TotalReturnProduct: number =0
  TotalSaleOffers: number =0
  TotalInventory: number =0
  
   constructor(private productService:ProductServiceService,private Inventoryservice:InventoryServiceService) { }
   ngOnInit(): void {
     this.productService.GetAllProducts().subscribe((res:any)=>{
       
       this.TotalProducts = res.length; 
     })
     this.Inventoryservice.GetAllInventorys().subscribe((res:any)=>{
       this.TotalInventory= res.length;
     });
   }


}
