import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustombindingComponent } from './custombinding/custombinding.component';
import { ExplorecustomangComponent } from './explorecustomang.component';

const routes: Routes = [
  {path:'', component: ExplorecustomangComponent,
    children: [
      {path:'binding', component: CustombindingComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorecustomangRoutingModule { }
