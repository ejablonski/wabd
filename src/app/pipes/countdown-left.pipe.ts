import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for translating millisecods to string describing how much time
 * is left in a countdown.
 * 
 * @todo This just doesn't look right. Need some testing.
 */
@Pipe({
  name: 'countdownLeft'
})
export class CountdownLeftPipe implements PipeTransform {
  transform(value: number): string {
    const mSingular: string = ' minute '
    const mPlural: string = ' minutes '
    const hSingular: string = ' hour '
    const hPlural: string = ' hours '

    var minutes = value / (1000 * 60)

    if(minutes < 1) {
      return 'Less then a minute'
    } else if(minutes < 60) {
      return Math.floor(minutes) + ' minutes'
    } else {
      const hours = minutes / 60
      minutes %= 60

      if(hours > 24) {
        return 'Over a day'
      }

      return Math.floor(hours) + (hours > 1 ? hPlural : hSingular) + 'and ' + Math.floor(minutes) + (minutes > 1 ? mPlural : mSingular)
    }
  }
}
