import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueItemComponent } from './components/catalogue-item/catalogue-item.component';
import { CatalogueItemsComponent } from './components/catalogue-items/catalogue-items.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
    children: [
      { path: '', component: CatalogueItemsComponent },
      { path: ':id', component: CatalogueItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
