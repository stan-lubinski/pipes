import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrComponent } from '@pipes/helpers';
import { HeaderComponent } from '@pipes/ui';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    RouterModule,
    HeaderComponent,
    HttpClientModule,
    ToastrComponent,
  ],
})
export class ShellModule {}
