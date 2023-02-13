import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Observable,
  Subscription,
  tap,
  map,
  of
} from 'rxjs';

import { WeatherDataModel } from 'src/app/models/weather-data.model';

import { OpenMeteoService } from 'src/app/services/open-meteo.service';
import { SettingsService } from 'src/app/services/settings.service';
import { ClockService } from 'src/app/services/clock.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {
  weatherData$: Observable<WeatherDataModel> = new Observable<WeatherDataModel>()
  clockTick$: Observable<number> = new Observable<number>()
  currentDate$: Observable<Date> = new Observable<Date>()

  openMeteoSubscription: Subscription = new Subscription()
  clockSubscription: Subscription = new Subscription()

  chartLabels: string[] = []
  chartOptions: { [key: string]: any } = {}

  daysProgress: number = 100
  isDataStored: boolean = false

  constructor(
    private localStorageService: LocalStorageService,
    private settingsService: SettingsService,
    private openMeteoService: OpenMeteoService,
    private clockService: ClockService
  ) {}

  ngOnInit(): void {
    const newDate: Date = new Date()
    const localStorageTimestamp: string | null = this.localStorageService.timestamp
    const localStorageData: string | null = this.localStorageService.getItem('weatherData')

    this.localStorageService.subscribeToStorage('weatherData')
    this.updateDate(newDate)

    if(localStorageTimestamp === null) {
      this.localStorageService.timestamp = newDate.toDateString()
    } else if (localStorageTimestamp === newDate.toDateString()){
      this.isDataStored = true
    }

    this.chartLabels = this.createChartLabels(this.settingsService.timeFormat)
    this.chartOptions = {
      responsive: this.settingsService.weatherWidgetSettings.chartResponsive,
      maintainAspectRatio: this.settingsService.weatherWidgetSettings.chartMaintainAspectRatio,
      scales: { y: [{ ticks: { stepSize:0, precision: 0, callback: function(value: number) {
        if (Math.floor(value) === value) {
            return value;
        }
        return value
    } }}]}
    }

    if(this.isDataStored && localStorageData !== null) {
      this.weatherData$ = of(JSON.parse(localStorageData))
    } else {
      this.weatherData$ = this.openMeteoService.getForecastForToday()
      this.openMeteoSubscription = this.weatherData$.subscribe()
    }

    this.clockTick$ = this.clockService.clock
    this.clockSubscription = this.clockTick$
      .pipe(
        tap(() => {
          this.updateDate(new Date())
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    if(!this.isDataStored) {
      this.openMeteoSubscription.unsubscribe()
    }

    this.clockSubscription.unsubscribe()
  }

  /**
   * Update properties with new JS Date value.
   */
  private updateDate(date: Date) {
    this.currentDate$ = of(date)
    this.daysProgress = this.calculateDaysProgress(date)
  }

  /**
   * Function that calculates how much of a day have already passed.
   * @param date JS Date object
   * @returns How much of a day have passed in percent.
   */
  private calculateDaysProgress(date: Date): number {
    return Math.floor((((date.getHours() * 60 + date.getMinutes()) * 100) / 1440))
  }

  /**
   * Function to create array of labels describing hours.
   * @param format '24' or '12'
   * @returns Array of strings with labels
   */
  private createChartLabels(format: string = '12'): string[] {
    let ret: string[] = []

    if(format === '24') {
      for(var i = 0; i < 24; i++) {
        ret.push(i.toString())
      }
    } else {
      let suffix: string = ' AM'
      for(var i = 0; i <= 1; i++){
        for(var j = 1; j <= 12; j++) {
          ret.push(j.toString() + suffix)
        }
        suffix = ' PM'
      }
    }

    return ret
  }
}
