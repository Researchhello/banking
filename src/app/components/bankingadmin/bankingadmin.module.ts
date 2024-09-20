import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingadminRoutingModule } from './bankingadmin-routing.module';
import { BankingadminComponent } from './bankingadmin.component';


@NgModule({
  declarations: [
    BankingadminComponent
  ],
  imports: [
    CommonModule,
    BankingadminRoutingModule
  ]
})
export class BankingadminModule { }
