import { Injectable } from '@angular/core';
import { Inventory } from '../Supplier-Models/Inventory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../Endpoints/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {
  Iventory_Url = endpoints.Inventory
  constructor(private http:HttpClient) { }

AddInventory(Iventory:Inventory): Observable<Inventory>
{
  const formData = new FormData();
    Object.entries(Iventory).forEach(([key, value]) => {
      formData.append(key, value);
    });
  return this.http.post<Inventory>(`${this.Iventory_Url}/AddInventory`,formData)
}

GetAllInventorys():Observable<Inventory>
{
  return this.http.get<Inventory>(`${this.Iventory_Url}/GetAllInventory`);
}

GetByIdInventory(id:number):Observable<Inventory>
{
  return this.http.get<Inventory>(`${this.Iventory_Url}/AddProduct${id}`);
}

DeleteInventory(id:number):Observable<Inventory>
{
  return this.http.delete<Inventory>(`${this.Iventory_Url}/DeleteInventory/${id}`);
}

UpdateInventory(Inventory:Inventory):Observable<Inventory>
{
  const formData = new FormData();
    Object.entries(Inventory).forEach(([key, value]) => {
      formData.append(key, value);
    });
  return this.http.put<Inventory>(`${this.Iventory_Url}/UpdateInventory`,formData);
}
}
