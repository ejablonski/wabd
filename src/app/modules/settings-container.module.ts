import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { SettingsContainerComponent } from '../components/settings-container/settings-container.component';
import { WeatherWidgetSettingsComponent } from '../components/weather-widget-settings/weather-widget-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent
  },
  {
    path: 'weather',
    component: WeatherWidgetSettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsContainerComponent,
    WeatherWidgetSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SettingsContainerModule { }
