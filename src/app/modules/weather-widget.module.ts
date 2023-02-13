import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { WeatherWidgetComponent } from '../components/weather-widget/weather-widget.component';

import { TemperaturePipe } from '../pipes/temperature.pipe';
import { EuAqiPipe } from '../pipes/eu-aqi.pipe';

@NgModule({
  declarations: [
    WeatherWidgetComponent,
    TemperaturePipe,
    EuAqiPipe,
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    WeatherWidgetComponent
  ]
})
export class WeatherWidgetModule { }
