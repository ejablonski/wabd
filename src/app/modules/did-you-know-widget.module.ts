import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DidYouKnowWidgetComponent } from '../components/did-you-know-widget/did-you-know-widget.component';

@NgModule({
  declarations: [
    DidYouKnowWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DidYouKnowWidgetComponent
  ]
})
export class DidYouKnowWidgetModule { }
