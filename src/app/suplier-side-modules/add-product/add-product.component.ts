import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierServiceService } from '../Supplier-Service/supplier-service.service';
import { ProductServiceService } from '../Supplier-Service/product-service.service';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  supplierData:any
  productForm!: FormGroup;
  constructor(
    private supplerservice:SupplierServiceService,
     private fb:FormBuilder,
     private productService:ProductServiceService ,
     public dialogRef: MatDialogRef<AddProductComponent>,
     private notificationService: NotificationServiceService 
    ){}
    
    ngOnInit(): void {
      this.supplerservice.GetAllSupplier().subscribe((res:any)=>{
        if(res != null)
        {
          this.supplierData = res.data;
        }
      });
      
      this.productForm = this.fb.group({
        ProductName: ['', Validators.required],
        ProductDesc: ['', Validators.required],
        ProductOrignalprice: ['', Validators.required],
        ProductActualprice: ['', Validators.required],
        SupplierId: ['', Validators.required],
        ProductImages: this.fb.array([this.createFileControl()]) 
      });
    }
  
    get productImages(): FormArray {
      return this.productForm.get('ProductImages') as FormArray;
    }
  
    createFileControl(): FormGroup {
      return this.fb.group({
        file: [null, Validators.required]
      });
    }
  
    addFileInput() {
      this.productImages.push(this.createFileControl());
    }
  
    async AddProduct() {
    var ProductData = this.productForm.getRawValue();
    
     (await this.productService.AddProduct(ProductData)).subscribe((res:any) => {
      if(res != null){
        this.notificationService.succuss(res.message);
      }
    });
    this.dialogRef.close(true);
  }
  CloseAddProductDailog() {
    this.dialogRef.close(false);
  }

}
