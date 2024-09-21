import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { BankingadminModule } from './components/bankingadmin/bankingadmin.module';
import { ProductsComponent } from './components/products/products.component';
import { ExplorecustomangModule } from './components/explorecustomang/explorecustomang.module';

const routes: Routes = [
  {path:'orders', component: OrdersComponent},
  {
    path: 'bankingadmin',
    loadChildren: () => import('./components/bankingadmin/bankingadmin.module' ).then(m => BankingadminModule)
  },
  {path:'products', component: ProductsComponent},
  {
    path: 'explore',
    loadChildren: () => import('./components/explorecustomang/explorecustomang.module' ).then(m => ExplorecustomangModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
