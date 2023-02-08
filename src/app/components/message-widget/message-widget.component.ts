import {
  Component,
  OnInit
} from '@angular/core';

import { RGBA } from 'src/app/interfaces';

/**
 * This simple widget shows a message on a home screen of the application.
 * You can define title, message content and background color. This widget
 * is meant to never connect with any external endpoint.
 */
@Component({
  selector: 'app-message-widget',
  templateUrl: './message-widget.component.html',
  styleUrls: ['./message-widget.component.scss']
})
export class MessageWidgetComponent implements OnInit {
  title: string = 'MessageWidget'
  message: string = 'MessageWidget message'
  bgColor:RGBA = { red: 0, green: 0, blue: 0, alpha: 0.7 }

  constructor() {}

  ngOnInit(): void {}
}
