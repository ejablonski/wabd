import {
  Injectable,
  OnDestroy
} from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import {
  Subscription,
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
export class OpenMeteoService implements OnDestroy {
  private forcastEndpoint: string = 'https://api.open-meteo.com/v1/forecast'
  private airQualityEndpoint: string = 'https://air-quality-api.open-meteo.com/v1/air-quality'

  private openMeteoSubcription: Subscription = new Subscription()

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
 getForecastForToday(): Observable<WeatherDataModel> {
    let weatherData: WeatherDataModel = {} as WeatherDataModel
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
        'hourly': ['european_aqi']
      }
    )

    const forcastData$ = this.httpClient
      .get(this.forcastEndpoint, { params: forcastParams })

    const airQualityData$ = this.httpClient
      .get(this.airQualityEndpoint, { params: airQualityParams })

    this.openMeteoSubcription = forkJoin([forcastData$, airQualityData$])
      .pipe(
        catchError(error => { return throwError(() => new Error(error.message))}),
        map(response => {
          weatherData.temp = (response[0] as OpenMeteoDataModel).hourly.temperature_2m
          weatherData.snowfall = (response[0] as OpenMeteoDataModel).hourly.snowfall
          weatherData.rain = (response[0] as OpenMeteoDataModel).hourly.rain
          weatherData.showers = (response[0] as OpenMeteoDataModel).hourly.showers
          weatherData.european_aqi = (response[1] as OpenMeteoDataModel).hourly.european_aqi
          weatherData.chartData = [{
            data: (response[0] as OpenMeteoDataModel).hourly.temperature_2m.slice(0, 24)
          }]
        })
      )
      .subscribe()

    return of(weatherData)
  }

  ngOnDestroy(): void {
    this.openMeteoSubcription.unsubscribe()
  }
}
