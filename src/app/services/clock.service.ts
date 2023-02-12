import { Injectable } from '@angular/core';
import {
  Observable,
  interval
} from 'rxjs';

/**
 * This service provides Observable that is ticking for every minute.
 */
@Injectable({
  providedIn: 'platform'
})
export class ClockService {
  /** This is what you want to subscribe to. */
  public clock: Observable<number>

  constructor() {
    this.clock = interval(1000 * 60)
  }
}
