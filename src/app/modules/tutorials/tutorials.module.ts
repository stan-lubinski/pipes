import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TutorialCardComponent } from '@pipes/ui';
import { TutorialsItemComponent } from './components/tutorials-item/tutorials-item.component';
import { TutorialsItemsComponent } from './components/tutorials-items/tutorials-items.component';
import { TutorialsRoutingModule } from './tutorials-routing.module';
import { TutorialsComponent } from './tutorials.component';

@NgModule({
  declarations: [
    TutorialsComponent,
    TutorialsItemsComponent,
    TutorialsItemComponent,
  ],
  imports: [
    CommonModule,
    TutorialsRoutingModule,
    RouterModule,
    TutorialCardComponent,
  ],
})
export class TutorialsModule {}
