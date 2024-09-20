import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { BankingadminModule } from './components/bankingadmin/bankingadmin.module';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'orders', component: OrdersComponent},
  {
    path: 'bankingadmin',
    loadChildren: () => import('./components/bankingadmin/bankingadmin.module' ).then(m => BankingadminModule)
},
{path:'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
