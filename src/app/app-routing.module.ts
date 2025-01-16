import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'UserHome',pathMatch:'full'},
  {path:'UserHome',loadChildren: () => import('./client-side-modules/client-side-modules.module').then(m => m.ClientSideModulesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
