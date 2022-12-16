import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './shoes/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './shoes/all/all.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [HomeComponent, ShoesComponent, CreateComponent, AllComponent, AccountsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
})
export class AdminModule {}
