import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Observable,
  Subscription,
  tap,
  of
} from 'rxjs';

import { OpenMeteoService } from 'src/app/services/open-meteo.service';
import { SettingsService } from 'src/app/services/settings.service';

import { WeatherDataModel } from 'src/app/models/weather-data.model';
import { ClockService } from 'src/app/services/clock.service';

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

  constructor(
    private settingsService: SettingsService,
    private openMeteoService: OpenMeteoService,
    private clockService: ClockService
  ) {}
  
  ngOnInit(): void {
    this.updateDate()
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

    this.weatherData$ = this.openMeteoService.getForecastForToday()
    this.openMeteoSubscription = this.weatherData$.subscribe()

    this.clockTick$ = this.clockService.clock
    this.clockSubscription = this.clockTick$
      .pipe(
        tap(() => {
          this.updateDate()
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.openMeteoSubscription.unsubscribe()
    this.clockSubscription.unsubscribe()
  }

  /**
   * Update properties with new JS Date value.
   */
  private updateDate() {
    const newDate = new Date()
    this.currentDate$ = of(newDate)
    this.daysProgress = this.calculateDaysProgress(newDate)
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
