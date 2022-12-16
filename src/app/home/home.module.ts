import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WomanComponent } from './woman/woman.component';
import { ManComponent } from './man/man.component';
import { ChildrenComponent } from './children/children.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    WomanComponent,
    ManComponent,
    ChildrenComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, HttpClientModule],
})
export class HomeModule {}
