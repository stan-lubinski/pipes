import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'catalogue',
        loadChildren: () =>
          import('../catalogue/catalogue.module').then(
            (m) => m.CatalogueModule
          ),
      },
      {
        path: 'tutorials',
        loadChildren: () =>
          import('../tutorials/tutorials.module').then(
            (m) => m.TutorialsModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
