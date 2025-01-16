import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../../authentication-modules/Authentication-models/UserRegister';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../Endpoints/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  User_Url = endpoints.User;
  constructor(private http:HttpClient) { }

  GetUserInformation(id: number): Observable<UserRegister> {
    return this.http.get<UserRegister>(`${this.User_Url}/GetUserById/${id}`);
  }








  getDataFromToken()
  {
    const token = localStorage.getItem('user');
    if (token) {
      const parsedToken = JSON.parse(token); 
      return parsedToken;
    }
  }
}
