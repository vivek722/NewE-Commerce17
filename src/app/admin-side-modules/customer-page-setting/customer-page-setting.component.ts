import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminCustomerServiceService } from '../Admin-All-Services/admin-customer-service.service';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddCustomerPageComponent } from '../add-customer-page/add-customer-page.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfremationDailogComponent } from '../../shared-modules/delete-confremation-dailog/delete-confremation-dailog.component';
import { Store } from '@ngrx/store';
import { customerPageNames } from '../../shared-modules/Enums/CustomerPagename.Enum';
import { DeleteCustomerPageSettings } from '../../State/action/CustomerPageSetting.action';

@Component({
  selector: 'app-customer-page-setting',
  templateUrl: './customer-page-setting.component.html',
  styleUrl: './customer-page-setting.component.css'
})
export class CustomerPageSettingComponent implements OnInit {
  AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false;
constructor(private AdminService:AdminCustomerServiceService,
  public dialog:MatDialog,
  private _liveAnnouncer:LiveAnnouncer, 
  private store:Store){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Index','Page Name','Page Active','Toster Message Active','Delete Dailog Active','Loader Active','Action'];

AddCustomerPage(data?:any) {
  const dialogRef = this.dialog.open(AddCustomerPageComponent,{
    data,
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result == true){
      this.displayProductData();
    }
  });
}
  displayProductData() {
    this.isloding = true;
    this.AdminService.getAllCustomerPageSetting().subscribe((res:any)=>{
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
  DeleteCustomerPage(id:number,pageName:string){
    const dialogRef = this.dialog.open(DeleteConfremationDailogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.AdminService.deleteCustomerPage(id).subscribe((res:any)=>{
          this.displayProductData();
          this.store.dispatch(DeleteCustomerPageSettings({pageName: pageName,PageActive:"",IsLoderActive:"",IsTosterActive:"",IsDeleteDialogActive:"",editConfig:false,deleteConfig:false})); 
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
