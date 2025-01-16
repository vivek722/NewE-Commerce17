import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddSupplierPageComponent } from '../add-supplier-page/add-supplier-page.component';
import { AdminSupplierServiceService } from '../Admin-All-Services/admin-supplier-service.service';
import { NotificationServiceService } from '../../shared-modules/Shared-Service/notification-service.service';
import { DeleteConfremationDailogComponent } from '../../shared-modules/delete-confremation-dailog/delete-confremation-dailog.component';
import { UpdateCustomerPageSettings } from '../../State/action/CustomerPageSetting.action';

@Component({
  selector: 'app-supplier-page-setting',
  templateUrl: './supplier-page-setting.component.html',
  styleUrl: './supplier-page-setting.component.css'
})
export class SupplierPageSettingComponent implements OnInit {

  AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false
constructor(private AdminService:AdminSupplierServiceService,public dialog:MatDialog,private _liveAnnouncer:LiveAnnouncer,private notificationservice: NotificationServiceService ){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Index','Page Name','Page Active','Toster Message Active','Delete Dailog Active','Loader Active','Action'];

AddSupplierPage(data?:any) {
  const dialogRef = this.dialog.open(AddSupplierPageComponent)
  dialogRef.afterClosed().subscribe(result => {
    if(result == true) {
      this.displayProductData();
    }
  })
  }
  displayProductData() {
    this.isloding = true;
    this.AdminService.getAllsupplierPage().subscribe((res:any)=>{
      this.AllProducts = res.data;  
      // const result = this.getPageConfigSetting(CustomerPage.PageName);
      //     if (result)
      //     {
      //       this.store.dispatch(UpdateCustomerPageSettings({pageName: customerPageNames.Home,PageActive:CustomerPage.IsPageActive,IsLoderActive:CustomerPage.IsPageActive,IsTosterActive:CustomerPage.IsTosterActive,IsDeleteDialogActive:CustomerPage.IsDeleteDialogActive,editConfig:true,deleteConfig:false})); 
      //     }

      this.dataSource = new MatTableDataSource(this.AllProducts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginatior;
    })  
    setTimeout(() => {
      this.isloding = false;
    }, 2000);
  }
  getPageConfigSetting(PageName: any) {
    throw new Error('Method not implemented.');
  }
  DeleteSupplierPage(id:number){
   const dialogRef = this.dialog.open(DeleteConfremationDailogComponent);
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           this.AdminService.deletesupplierPage(id).subscribe((res:any)=>{
            this.notificationservice.succuss(res.message)
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
