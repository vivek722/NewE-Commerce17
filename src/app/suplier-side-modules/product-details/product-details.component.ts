import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { ProductServiceService } from '../Supplier-Service/product-service.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfremationDailogComponent } from '../../shared-modules/delete-confremation-dailog/delete-confremation-dailog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false
constructor(private productService:ProductServiceService,
  public dialog:MatDialog,
  private _liveAnnouncer:LiveAnnouncer,
  private notification:NotificationServiceService
){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Product Image','Product Name', 'Product Description', 'Product Orignal Price', 'Product Offer Price','Action'];

AddProduct(data?:any) {
  const dialogRef = this.dialog.open(AddProductComponent);
  dialogRef.afterClosed().subscribe(result => {
    if(result == true) {
      this.displayProductData();
    }
  });
  }
  displayProductData() {
    this.isloding = true;
    this.productService.GetAllProducts().subscribe((res:any)=>{
      this.AllProducts = res.data;  

      this.dataSource = new MatTableDataSource(this.AllProducts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginatior;
      console.log(this.AllProducts);
    })  
    setTimeout(() => {
      this.isloding = false;
    }, 2000);
  }
  DeleteProduct(id:number){
    const dialogRef = this.dialog.open(DeleteConfremationDailogComponent);
           dialogRef.afterClosed().subscribe(result => {
             if (result) {
               this.productService.DeleteProduct(id).subscribe((res:any)=>{
                this.notification.succuss(res.message)
                 this.displayProductData();
            })  
          }
       });
  }
announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
}
