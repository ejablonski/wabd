import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownWidgetComponent } from '../components/countdown-widget/countdown-widget.component';

import { CountdownLeftPipe } from '../pipes/countdown-left.pipe';

@NgModule({
  declarations: [
    CountdownWidgetComponent,
    CountdownLeftPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountdownWidgetComponent
  ]
})
export class CountdownWidgetModule { }
