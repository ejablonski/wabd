import { Component } from '@angular/core';

/**
 * Widget component that will countdown from set value and trigger an event
 * when counting is over. This widget is meant to never connect with any
 * external endpoint.
 */
@Component({
  selector: 'app-countdown-widget',
  templateUrl: './countdown-widget.component.html',
  styleUrls: ['./countdown-widget.component.scss']
})
export class CountdownWidgetComponent {
  title: string = 'CountdownWidget'
  time: number = 3600
}
