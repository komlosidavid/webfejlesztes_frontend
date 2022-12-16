import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { HomeComponent } from './home/home.component';
import { ManComponent } from './man/man.component';
import { WomanComponent } from './woman/woman.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'woman', component: WomanComponent },
  { path: 'man', component: ManComponent },
  { path: 'children', component: ChildrenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
