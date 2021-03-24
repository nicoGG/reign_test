import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HitsRoutingModule } from './hits-routing.module';
import { HitsListComponent } from './components/hits-list/hits-list.component';


@NgModule({
  declarations: [
    HitsListComponent
  ],
  imports: [
    CommonModule,
    HitsRoutingModule
  ],
  exports: [
    HitsListComponent
  ]
})
export class HitsModule { }
