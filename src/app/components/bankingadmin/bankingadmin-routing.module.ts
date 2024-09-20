import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingadminComponent } from './bankingadmin.component';

const routes: Routes = [
  {path:'', component: BankingadminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingadminRoutingModule { }
