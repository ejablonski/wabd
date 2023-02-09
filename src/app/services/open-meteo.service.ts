import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import {
  Observable,
  forkJoin,
  of,
  throwError,
} from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';

import { WeatherDataModel } from '../models/weather-data.model';
import { OpenMeteoDataModel } from '../models/open-meteo.model';

import { SettingsService } from './settings.service';

/**
 * This service is fetching data from OpenMeteo REST API. Covers version 1
 * of the API.
 * 
 * @remarks
 * Not all request are covered by this service. Only stuff needed
 * by WeatherWidget.
 * 
 * @see {@link https://open-meteo.com/en/docs} for more info
 */
@Injectable({
  providedIn: 'root'
})
export class OpenMeteoService {
  private forcastEndpoint: string = 'https://api.open-meteo.com/v1/forecast'
  private airQualityEndpoint: string = 'https://air-quality-api.open-meteo.com/v1/air-quality'
  
  constructor(
    private httpClient: HttpClient,
    private settings: SettingsService
  ) {}
  
  /**
   * Make an request for a forcast for today.
   * @remarks Response will be translated to WeatherData model.
   * @returns WeatherData observable.
   * @throws New observable with error data if request cannot be made
   * or request data is invalid.
  */
 getForecastForToday(): Observable<WeatherDataModel[]> {
    let weatherData: WeatherDataModel[] = []
    let requestParams: HttpParams = new HttpParams()
    let forcastParams: HttpParams = new HttpParams()
    let airQualityParams: HttpParams = new HttpParams()
  
    requestParams = requestParams.appendAll(
      {
        'latitude': this.settings.latitude,
        'longitude': this.settings.longitude,
      }
    )

    forcastParams = requestParams.appendAll(
      {
        'temperature_unit': this.settings.tempUnit,
        'hourly': ['temperature_2m', 'snowfall', 'rain', 'showers']
      }
    )

    airQualityParams = requestParams.appendAll(
      {
        'hourly': ['pm10', 'pm2_5']
      }
    )

    const forcastData$ = this.httpClient
      .get(this.forcastEndpoint, { params: forcastParams })

    const airQualityData$ = this.httpClient
      .get(this.airQualityEndpoint, { params: airQualityParams })

    forkJoin([forcastData$, airQualityData$])
      .pipe(
        catchError(error => { return throwError(() => new Error(error.message))}),
        map(
          data => {
            for(let i = 0; i < 24; i++) {
              weatherData.push({
                temp: (data[0] as OpenMeteoDataModel).hourly.temperature_2m[i],
                snowfall: (data[0] as OpenMeteoDataModel).hourly.snowfall[i],
                rain: (data[0] as OpenMeteoDataModel).hourly.rain[i],
                showers: (data[0] as OpenMeteoDataModel).hourly.showers[i],
                pm10: (data[1] as OpenMeteoDataModel).hourly.pm10[i],
                pm2_5: (data[1] as OpenMeteoDataModel).hourly.pm2_5[i]
              })
            }
          }
        )
      )
      .subscribe()

    return of(weatherData)
  }
}
