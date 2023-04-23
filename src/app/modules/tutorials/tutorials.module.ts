import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { TutorialsComponent } from './tutorials.component';
import { RouterModule } from '@angular/router';
import { TutorialsItemsComponent } from './components/tutorials-items/tutorials-items.component';
import { TutorialsItemComponent } from './components/tutorials-item/tutorials-item.component';

@NgModule({
  declarations: [
    TutorialsComponent,
    TutorialsItemsComponent,
    TutorialsItemComponent,
  ],
  imports: [CommonModule, TutorialsRoutingModule, RouterModule],
})
export class TutorialsModule {}
