import { Injectable } from '@angular/core';
import { endpoints } from '../../../Endpoints/Endpoint';
import { HttpClient } from '@angular/common/http';
import { CustomerPageSetting } from '../Admin-Models/Customer-page-setting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerServiceService {

  CustomerPageSetting_URL = endpoints.CustomerPagesSetting;
  constructor(private httpclient: HttpClient) { }

  AddCustomerPageSetting(customerPageSetting:CustomerPageSetting) :Observable<CustomerPageSetting>{
    const fromdata = new FormData();
    Object.entries(customerPageSetting).forEach(([key,value])=>{
      fromdata.append(key,value);
    })
    return this.httpclient.post<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/CustomerPageAdd`, fromdata);
  }

  getAllCustomerPageSetting():Observable<CustomerPageSetting> 
  {
    return this.httpclient.get<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/GetAllCustomerPage`);
  }
  getCustomerPagebyId(id:number) :Observable<CustomerPageSetting>
  {
    return this.httpclient.get<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/GetCustomerPageById/${id}`);
  }
  deleteCustomerPage(id:number) :Observable<CustomerPageSetting>{
    return this.httpclient.delete<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/DeleteCustomerPage/${id}`);
  }
  updateCustomerPage(customerPageSetting:CustomerPageSetting) :Observable<CustomerPageSetting>{
    const fromdata = new FormData();
    Object.entries(customerPageSetting).forEach(([key,value])=>{
      fromdata.append(key,value);
    });
    return this.httpclient.put<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/UpdateCustomerPage`, fromdata);
  }

}
