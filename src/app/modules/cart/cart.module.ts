import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonComponent, CartItemCardComponent } from '@pipes/ui';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    CartItemCardComponent,
    ButtonComponent,
  ],
})
export class CartModule {}
