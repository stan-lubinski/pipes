import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueItemsComponent } from './components/catalogue-items/catalogue-items.component';
import { CatalogueItemComponent } from './components/catalogue-item/catalogue-item.component';

@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueItemsComponent,
    CatalogueItemComponent,
  ],
  imports: [CommonModule, CatalogueRoutingModule, RouterModule],
})
export class CatalogueModule {}
