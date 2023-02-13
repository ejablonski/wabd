import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { SettingsContainerComponent } from '../components/settings-container/settings-container.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent
  }
];

@NgModule({
  declarations: [
    SettingsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsContainerModule {}
