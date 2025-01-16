import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  TosterConfig ={
    timeOut: 3000,
    positionClass: 'toast-center-center',
    preventDuplicates: false,
    closeButton: true,
    easing:'ease-in',
    easeTime:300
}
constructor(private  TosterService:ToastrService ) {}

succuss( Message:string,Title?:string){
  this.TosterService.success(Message,Title?Title:'',this.TosterConfig);
}
Error(Message:string,Title?:string){
  this.TosterService.error(Message,Title?Title:'',this.TosterConfig);
}
Infomation(Message:string,Title?:string){
  this.TosterService.info(Message,Title?Title:'',this.TosterConfig);
}
warning(Message:string,Title?:string){
  this.TosterService.warning(Message,Title?Title:'',this.TosterConfig);
}
}
