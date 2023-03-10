import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { WeatherWidgetSettingsModel } from '../models/weather-widget-settings.model';
import { CountdownWidgetSettingsModel } from '../models/countdown-widget-settings.model';
import { MessageWidgetSettingsModel } from '../models/message-widget-settings.model';

/**
 * Service for holding and managing app settings. Changing one of the settings
 * values will emit signal via settingsChanged Subject.
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // Application settings
  private _latitude: number = 52.23
  private _longitude: number = 21.01
  private _tempUnit: string = 'celsius' // or fahrenheit
  private _timeFormat: string = '12' // or 24

  // Default widgets settings
  private _weatherWidgetSettings: WeatherWidgetSettingsModel = {
    chartResponsive: true,
    chartMaintainAspectRatio: false
  }
  private _countdownWidgetSettings: CountdownWidgetSettingsModel = {
    enabled: true,
    title: 'Countdown',
    messageWhenDone: 'Done',
    countdownEnd: 0
  }
  private _messageWidgetSettings: MessageWidgetSettingsModel = {
    enabled: false,
    title: 'Title',
    message: 'Message'
  }

  settingsChanged = new Subject<{[key: string]: number | string}>()

  constructor() {}

  public get latitude() {
    return this._latitude
  }

  public set latitude(lat: number) {
    if(Math.abs(lat) >= 90) {
      throw new Error('Invalid latitude value.')
    }

    this._latitude = lat
    this.settingsChanged.next({latitude: lat})
  }

  public get longitude() {
    return this._longitude
  }

  public set longitude(lon: number) {
    if(Math.abs(lon) >= 180) {
      throw new Error('Invalid longitude value.')
    }

    this._longitude = lon
    this.settingsChanged.next({longitude: lon})
  }

  public get tempUnit() {
    return this._tempUnit
  }

  public set tempUnit(unit: string) {
    if(unit !== 'celsius' && unit !== 'fahrenheit') {
      throw new Error('Invalid temperature unit.')
    }

    this._tempUnit = unit
    this.settingsChanged.next({tempUnit: unit})
  }

  public get timeFormat() {
    return this._timeFormat
  }

  public set timeFormat(format: string) {
    if(format !== '12' && format !== '24') {
      throw new Error('Invalid time format')
    }

    this._timeFormat = format
    this.settingsChanged.next({timeFormat: format})
  }

  public get weatherWidgetSettings(): WeatherWidgetSettingsModel {
    return this._weatherWidgetSettings
  }

  public get countdownWidgetSettings(): CountdownWidgetSettingsModel {
    return this._countdownWidgetSettings
  }

  public get messageWidgetSettings(): MessageWidgetSettingsModel {
    return this._messageWidgetSettings
  }
}
