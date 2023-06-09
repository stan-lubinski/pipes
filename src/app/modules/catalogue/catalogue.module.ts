import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, PreviewCardComponent } from '@pipes/ui';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueItemComponent } from './components/catalogue-item/catalogue-item.component';
import { CatalogueItemsComponent } from './components/catalogue-items/catalogue-items.component';

@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueItemsComponent,
    CatalogueItemComponent,
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    RouterModule,
    PreviewCardComponent,
    HttpClientModule,
    ButtonComponent,
  ],
})
export class CatalogueModule {}
