import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageWidgetComponent } from '../components/message-widget/message-widget.component';

@NgModule({
  declarations: [
    MessageWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageWidgetComponent
  ]
})
export class MessageWidgetModule { }
