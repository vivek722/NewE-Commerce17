import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Supplier-Service/product-service.service';
import { InventoryServiceService } from '../Supplier-Service/inventory-service.service';

@Component({
  selector: 'app-supplier-deshboard',
  templateUrl: './supplier-deshboard.component.html',
  styleUrl: './supplier-deshboard.component.css'
})
export class SupplierDeshboardComponent  implements OnInit {
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
