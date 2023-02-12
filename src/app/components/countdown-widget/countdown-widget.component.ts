import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Observable,
  Subscription
} from 'rxjs';
import { tap } from 'rxjs/operators';

import { ClockService } from 'src/app/services/clock.service';

import { SettingsService } from 'src/app/services/settings.service';

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
export class CountdownWidgetComponent implements OnInit, OnDestroy {
  clockTick$: Observable<number> = new Observable<number>()
  clockSubscription: Subscription = new Subscription()

  title: string = this.settingsService.countdownWidgetSettings.title
  messageWhenDone: string = this.settingsService.countdownWidgetSettings.messageWhenDone
  countdownEnd: number = this.settingsService.countdownWidgetSettings.countdownEnd
  countdownNow: number = new Date().getTime()
  isDone: boolean = false

  constructor(
    private settingsService: SettingsService,
    private clockService: ClockService) {}

  ngOnInit(): void {
    this.updateCountdown()
    this.clockTick$ = this.clockService.clock
    this.clockSubscription = this.clockTick$
      .pipe(
        tap(() => {
          this.updateCountdown()
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe()
  }

  /**
   * Function that will update countadown timer.
   * @param mod Interval of an update in milliseconds. If you updating for
   * every second then leave it at 1000.
   */
  updateCountdown(mod: number = 1000): void {
    if(this.countdownNow >= this.countdownEnd) {
      this.isDone = true
    } else {
      this.countdownNow += mod
    }
  }
}
