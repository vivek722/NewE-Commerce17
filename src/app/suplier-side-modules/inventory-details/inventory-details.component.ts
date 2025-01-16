import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { AdminSupplierServiceService } from '../../admin-side-modules/Admin-All-Services/admin-supplier-service.service';
import { InventoryServiceService } from '../Supplier-Service/inventory-service.service';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SupplierPageNames } from '../../shared-modules/Enums/SupplierPagenameEnum.';
import { AddInvenoryComponent } from '../add-invenory/add-invenory.component';
import { DeleteConfremationDailogComponent } from '../../shared-modules/delete-confremation-dailog/delete-confremation-dailog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.css'
})
export class InventoryDetailsComponent {
  inventoryData:any[]=[];
  pageSettings:any[]=[];
  dataSource:any;
  isloding:boolean = false

  constructor(private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private Inventoryservice:InventoryServiceService,
    private notification: NotificationServiceService,
    private adminSupplierPageService: AdminSupplierServiceService
  ){}
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayInventoryData();
    this.getPageSettingValue();
  }

displayedColumns: string[] = ['Product Image','Product Name','quantity','warehouse Name','location','Action'];
pagename:any;

getPageSettingValue(){
  this.pagename = SupplierPageNames.Inventory_Details;
  this.adminSupplierPageService.getAllsupplierPage().subscribe((res:any) => {
    this.pageSettings = res.data;
    console.log("pages",this.pageSettings)
  })
}
announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
AddInventory(data?:any) {
  const dialogRef = this.dialog.open(AddInvenoryComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result == true) {
      this.displayInventoryData();
    }
});
}
DeleteInventory(id:number){
const dialogRef = this.dialog.open(DeleteConfremationDailogComponent);
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           this.Inventoryservice.DeleteInventory(id).subscribe((res:any)=>{
            this.notification.succuss(res.message)
             this.displayInventoryData();
        })  
      }
   });
}
displayInventoryData() {

  this.isloding = true;
    this.Inventoryservice.GetAllInventorys().subscribe((res:any)=>{
      this.inventoryData = res.data
      console.log(res.data);
       this.dataSource = new MatTableDataSource(this.inventoryData);
       this.dataSource.paginator = this.paginatior;
       this.dataSource.sort = this.sort;
    })
    setTimeout(() => {
      this.isloding = false;
    }, 2000);
  }

}
