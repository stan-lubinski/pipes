import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './tutorials.component';
import { TutorialsItemsComponent } from './components/tutorials-items/tutorials-items.component';
import { TutorialsItemComponent } from './components/tutorials-item/tutorials-item.component';

const routes: Routes = [
  {path: '', component: TutorialsComponent, children: [
    {path: '', component: TutorialsItemsComponent},
    {path: ':id', component: TutorialsItemComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRoutingModule { }
