import { Component, OnInit } from '@angular/core';

/**
 * This component holds application and widgets settings forms.
 */
@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss']
})
export class SettingsContainerComponent implements OnInit {
  widgets: string[] = ['Countdown', 'Did you know']

  constructor() {}

  ngOnInit(): void {}
}
