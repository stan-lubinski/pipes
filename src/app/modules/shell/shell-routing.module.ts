import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'cart',
        loadComponent: () =>
          import('../cart/cart.component').then((m) => m.CartComponent),
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('../catalogue/catalogue.module').then(
            (m) => m.CatalogueModule
          ),
      },
      {
        path: '',
        redirectTo: 'catalog',
        pathMatch: 'full',
      },
      {
        path: 'success',
        loadComponent: () =>
          import('@pipes/ui').then((m) => m.PurchaseCompleteComponent),
      },
      {
        path: '**',
        loadComponent: () =>
          import('@pipes/ui').then((m) => m.NotFoundComponent),
      },
      // {
      //   path: 'tutorials',
      //   loadChildren: () =>
      //     import('../tutorials/tutorials.module').then(
      //       (m) => m.TutorialsModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
