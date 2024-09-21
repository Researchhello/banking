import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorecustomangRoutingModule } from './explorecustomang-routing.module';
import { ExplorecustomangComponent } from './explorecustomang.component';


@NgModule({
  declarations: [
    ExplorecustomangComponent
  ],
  imports: [
    CommonModule,
    ExplorecustomangRoutingModule
  ]
})
export class ExplorecustomangModule { }
