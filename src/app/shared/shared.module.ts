import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { CardComponent } from './card/card.component';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
import { MatChipsModule } from '@angular/material/chips';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    ModalComponent,
    EditmodalComponent,
    CardComponent,
    CardPlaceholderComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatChipsModule,
  ],
  exports: [
    InputComponent,
    HeaderComponent,
    ModalComponent,
    EditmodalComponent,
    CardComponent,
    CardPlaceholderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
