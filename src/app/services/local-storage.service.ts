import {
  Injectable,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Subject } from 'rxjs';

/**
 * Service for saving and getting data to/from local storage.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements OnInit, OnDestroy {
  storage$: Subject<any> = new Subject<any>()

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.storage$.unsubscribe()
  }

  get timestamp(): string | null {
    return localStorage.getItem('timestamp')
  }

  set timestamp(value: string | null) {
    if(typeof value === 'string') {
      localStorage.setItem('timestamp', value)
    }
  }

  subscribeToStorage(key: string) {
    this.storage$.subscribe(data => this.setItem(key, data))
  }

  getItem(key: string): string | null {
    const data = localStorage.getItem(key)

    if(data !== null) {
      return JSON.parse(data)
    } else {
      return null
    }
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
