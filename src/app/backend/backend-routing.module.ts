import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BackendComponent} from './backend.component';
import {GoodsComponent} from './goods/goods.component';
import {CategoriesComponent} from './categories/categories.component';
import {AuthGuard} from "../auth/auth-guard.service";

const backendRoutes: Routes = [
  {path: 'admin', component: BackendComponent, children: [
      {path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      {path: 'goods', component: GoodsComponent, canActivate: [AuthGuard]},
      {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(backendRoutes)],
  exports: [RouterModule],
})
export class BackendRoutingModule { }

