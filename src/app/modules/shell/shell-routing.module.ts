import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', children: [
    {path: 'catalogue', loadChildren: () => import('../catalogue/catalogue.module').then(m => m.CatalogueModule)},
    {path: 'tutorials', loadChildren: () => import('../tutorials/tutorials.module').then(m => m.TutorialsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
