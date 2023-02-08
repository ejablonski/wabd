import {
  Component,
  OnInit
} from '@angular/core';

import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { Widget } from 'src/app/interfaces';

/**
 * This component is a widgets displaying container. Widgets (with a exception
 * for a mandatory Weather widget) can be user selected and are stored in an
 * array of Widget objects.
 */
@Component({
  selector: 'app-widget-container',
  templateUrl: './widgets-container.component.html',
  styleUrls: ['./widgets-container.component.scss']
})
export class WidgetsContainerComponent implements OnInit {
  widgets: Widget[] = []

  constructor() {}

  ngOnInit(): void {
    this.widgets.push(new Widget());
    this.widgets.push(new WeatherWidgetComponent())
    this.widgets.push(new Widget())
  }
}
