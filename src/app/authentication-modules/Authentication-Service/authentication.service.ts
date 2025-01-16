import { Injectable } from '@angular/core';
import { Login } from '../Authentication-models/Login';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../Endpoints/Endpoint';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Role } from '../../shared-modules/Shared-Models/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private ui: firebase.auth.Auth | null = null;
  tokenExpirationTimer:any;
  Auth_Url = endpoints.AUTH;
  private userSubject: BehaviorSubject<Login | null> = new BehaviorSubject<Login | null>(null);
  User : Observable<Login>= new  Observable<Login>; 
  tostr: any;
  constructor( private router: Router,private afAuth: AngularFireAuth,
    private http: HttpClient,
) { }
    
    public get LoginUserValue():Login | null {
      return this.userSubject.value;  
    }
    login(IUser:Login):Observable<Login>{
      return this.http.post<Login>(`${this.Auth_Url}/Login`,IUser).pipe(
        map((user:any) => {
          localStorage.setItem('user',JSON.stringify(user))
          this.userSubject.next(user);
          return user;
        })
      );
    }
    logout():void{
      this.removeToken();
      this.userSubject.next(null);
      this.router.navigate(['/Login']);
      this.tostr.success('Logout Successfully.','Logout',{
        closeButton:true
      });
    }
    Userislogin(){
      let token = localStorage.getItem('user');
      return token ? token : null;
    }
    getToken(): string | null {
      const token = localStorage.getItem('user');
      if (token) {
        const decodedToken = this.getDecodedAccessToken(token);
        localStorage.setItem('user',JSON.stringify(decodedToken))
        return decodedToken.role; 
      }
      return null;
    }
    getDecodedAccessToken(token: string): any {
      try {
        return jwtDecode(token);
      } catch (Error) {
        return null;
      }
    }

    resetTokenTimer(expirationTime:number)
    {
      this.clearTokenTimer();
      const now = new Date().getTime();
      const expiresIn = expirationTime - now;
      this.tokenExpirationTimer = setTimeout(() =>{
        this.autoLogout();
      }, expiresIn);
    }

  autoLogout()
    {
      this.removeToken();
      this.router.navigateByUrl('/login');
      this.tostr.error('Your Session Expired.Please Login Again','Logout',{
        closeButton:true
      });
    }
  clearTokenTimer()
  {
    clearTimeout(this.tokenExpirationTimer);
  }
  
  removeToken()
  {
    localStorage.removeItem('user');
  }
  async googleSignIn() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log('User signed in successfully:', result.user);
      localStorage.setItem('user',JSON.stringify(result.user))
      return result.user;
    } catch (error) {
      console.error('Google Sign-In failed:', error);
      throw error;
    }
  }
  async checkRole(email: string): Promise<Role> {
    try {
      const response = await firstValueFrom(
        this.http.get<Role>(`${this.Auth_Url}/GetRoledata/${email}`)
      );
      console.log('Role Response:', response); // For Debugging
      return response;
    } catch (error) {
      console.error('Failed to fetch user role:', error);
      throw error;
    }
  }
}