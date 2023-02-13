import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-weather-widget-settings',
  templateUrl: './weather-widget-settings.component.html',
  styleUrls: ['./weather-widget-settings.component.scss']
})
export class WeatherWidgetSettingsComponent implements OnInit {
  @ViewChild('f', { static: false }) weatherSettingsForm: NgForm = {} as NgForm

  latitude: number = 0
  longitude: number = 0
  timeFormat: string = ''
  tempUnit: string = ''

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
      this.latitude = this.settingsService.latitude
      this.longitude = this.settingsService.longitude
      this.timeFormat = this.settingsService.timeFormat
      this.tempUnit = this.settingsService.tempUnit
  }

  onSubmit(): void {
    this.settingsService.timeFormat = this.weatherSettingsForm.form.value.timeFormat
    this.settingsService.tempUnit = this.weatherSettingsForm.form.value.tempUnit
  }
}
