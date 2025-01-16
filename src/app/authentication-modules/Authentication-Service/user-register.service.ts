import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../../../Endpoints/Endpoint';
import { UserRegister } from '../Authentication-models/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  User_Url = endpoints.User;
  constructor(private http: HttpClient) { }
  Register(IUser:UserRegister ):Observable<UserRegister>{
    const formdata = new FormData();
    Object.entries(IUser).forEach(([key, value]) =>{
      formdata.append(key,value);
    })
    return this.http.post<UserRegister>(`${this.User_Url}/AddUser`,formdata)
  }
}
