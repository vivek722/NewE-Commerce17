import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryServiceService } from '../Supplier-Service/inventory-service.service';
import { ProductServiceService } from '../Supplier-Service/product-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';

@Component({
  selector: 'app-add-invenory',
  templateUrl: './add-invenory.component.html',
  styleUrl: './add-invenory.component.css'
})
export class AddInvenoryComponent implements OnInit {
  ProductData: any;
  InventoryData!: FormGroup;

  constructor(
    private frombuilder: FormBuilder,
    private inventoryservice: InventoryServiceService,
    private Productservice: ProductServiceService,
    private dialogRef: MatDialogRef<AddInvenoryComponent>,
    private notificationService: NotificationServiceService
  ) {}

  ngOnInit(): void {
    this.Productservice.GetAllProducts().subscribe((res: any) => {
      if (res != null) {
        this.ProductData = res.data;
      }
    });

    this.InventoryData = this.frombuilder.group({
      product_id: [0, Validators.required],
      WarehouseName: ['', Validators.required],
      Location: ['', Validators.required],
      Quantity: ['', Validators.required]
    });
  }

  AddInventory() {
    if (this.InventoryData.valid) {
      var inventoryData = this.InventoryData.getRawValue();
      this.inventoryservice.AddInventory(inventoryData).subscribe((res:any) => {
        if (res != null) {
          this.notificationService.succuss(res.message);
        }
        this.dialogRef.close(true);
      });
    }
  }

  CloseAddInventoryDailog() {
    this.dialogRef.close(false);
  }
}
