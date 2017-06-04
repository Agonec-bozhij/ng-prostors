import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BackendComponent} from './backend.component';
import {GoodsComponent} from './goods/goods.component';
import {CategoriesComponent} from './categories/categories.component';

const backendRoutes: Routes = [
  {path: 'admin', component: BackendComponent, children: [
      {path: '', component: HomeComponent, pathMatch: 'full' },
      {path: 'goods', component: GoodsComponent},
      {path: 'categories', component: CategoriesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(backendRoutes)],
  exports: [RouterModule],
})
export class BackendRoutingModule { }

