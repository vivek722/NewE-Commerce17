import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../Endpoints/Endpoint';
import { Observable } from 'rxjs';
import { supplierPageSetting } from '../Admin-Models/Supplier-Page-Setting';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminSupplierServiceService {

  supplierSettingUrl = endpoints.SupplierPagesSetting
  constructor(private httpclient:HttpClient) { }

  AddSupplierPageSetting(supplierPageSetting:supplierPageSetting) : Observable<supplierPageSetting> { 
    const formData = new FormData();
    Object.entries(supplierPageSetting).forEach(([key, value]) =>{
      formData.append(key, value);
    })
    return this.httpclient.post<supplierPageSetting>(`${this.supplierSettingUrl}/SupplierPageAdd`, formData);
  }

  getAllsupplierPage(): Observable<supplierPageSetting[]> {
    return this.httpclient.get<supplierPageSetting[]>(`${this.supplierSettingUrl}/GetAllSupplierPage`);
  }
  getsupplierPagebyId(id:number) :Observable<supplierPageSetting>
    {
      return this.httpclient.get<supplierPageSetting>(`${this.supplierSettingUrl}/GetSupplierPageById/${id}`);
    }
  deletesupplierPage(id:number) :Observable<supplierPageSetting>{
      return this.httpclient.delete<supplierPageSetting>(`${this.supplierSettingUrl}/DeleteSupplierPage/${id}`);
    }
  updatesupplierPage(supplierPageSetting:supplierPageSetting) :Observable<supplierPageSetting>{
    const formData = new FormData();
    Object.entries(supplierPageSetting).forEach(([key, value]) =>{
      formData.append(key, value);
    })
      return this.httpclient.put<supplierPageSetting>(`${this.supplierSettingUrl}/UpdateSupplierPage`, formData);
  }
}
