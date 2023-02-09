import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service for holding and managing app settings. Changing one of the settings
 * values will emit signal via settingsChanged Subject.
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _latitude: number = 52.23
  private _longitude: number = 21.01
  private _tempUnit: string = 'celsius' // or fahrenheit
  private _timeFormat: string = '12' // or 24

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
}
