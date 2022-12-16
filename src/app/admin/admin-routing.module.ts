import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './shoes/all/all.component';
import { CreateComponent } from './shoes/create/create.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      {
        path: 'shoes',
        component: ShoesComponent,
        children: [
          { path: 'create', component: CreateComponent },
          { path: 'all', component: AllComponent },
        ],
      },
      {
        path: 'accounts',
        component: AccountsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
