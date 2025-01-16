import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'UserRegister', component: UserRegisterComponent},
  {path:'UserHomePage', loadChildren: () => import('../client-side-modules/client-side-modules.module').then(m => m.ClientSideModulesModule)},
  {path:'Supplier', loadChildren: () => import('../suplier-side-modules/suplier-side-modules.module').then(m => m.SuplierSideModulesModule)},
  {path:'Admin',loadChildren: () => import('../admin-side-modules/admin-side-modules.module').then(m => m.AdminSideModulesModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationModulesRoutingModule { }
