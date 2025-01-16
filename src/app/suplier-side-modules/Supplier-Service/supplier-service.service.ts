import { Injectable } from '@angular/core';
import { Supplier } from '../Supplier-Models/Supplier';
import { endpoints } from '../../../Endpoints/Endpoint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  Supplier_Url =endpoints.Supplier
  constructor(private http:HttpClient) { }

  GetAllSupplier():Observable<Supplier>
  {
    return this.http.get<Supplier>(`${this.Supplier_Url}/GetAllSuppliers`);
  }
  AddSuppliers(supllier:Supplier):Observable<Supplier>
  {
    const formdata = new FormData();
    Object.entries(supllier).forEach(([key, value])=>{
      formdata.append(key, value);
    })
    return this.http.post<Supplier>(`${this.Supplier_Url}/AddSupplier`,formdata);
  }

  GetByIdSupplier(id:number):Observable<Supplier>
  {
    return this.http.get<Supplier>(`${this.Supplier_Url}/AddProduct ${id}`);
  }

  DeleteSupplier(id:number):Observable<Supplier>
  {
    return this.http.delete<Supplier>(`${this.Supplier_Url}/DeleteSupplier ${id}`);
  }

  UpdateSupplier(Supplier:Supplier):Observable<Supplier>
  {
    const formdata = new FormData()
    Object.entries(Supplier).forEach(([keyframes, value])=>{
      formdata.append(keyframes, value);
    })
    return this.http.put<Supplier>(`${this.Supplier_Url}/UpdateSupplier`,formdata);
  }
}
