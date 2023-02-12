import { Pipe, PipeTransform } from '@angular/core';

/**
 * Round value and add degree symbol.
 */
@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return (Math.round(value) + '°')
  }
}
