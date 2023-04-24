import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component'
import { HeaderComponent } from '@pipes/ui';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ShellRoutingModule, RouterModule, HeaderComponent],
})
export class ShellModule {}
