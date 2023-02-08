import { Component } from '@angular/core';

import { Widget } from 'src/app/interfaces';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent extends Widget {
}
