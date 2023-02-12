import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for translating number value of EU Air Quality Index to string score.
 * 
 * @remarks
 * The European Air Quality Index (AQI) ranges from 0-20 (good), 20-40 (fair),
 * 40-60 (moderate), 60-80 (poor), 80-100 (very poor) and exceeds 100 for
 * extremely poor conditions.
 */
@Pipe({
  name: 'euAqi'
})
export class EuAqiPipe implements PipeTransform {
  /**
   * @param value Numeric value from which score is determined.
   * @param separator String that will replace white spaces in score.
   * @returns Uppercase string of air conditions.
   */
  transform(value: number, separator: string = ' '): string {
    let score: string = 'GOOD'

    if(value >= 80) { score = 'VERY POOR' }
    else if(value >= 60) { score = 'POOR' }
    else if(value >= 40) { score = 'MODERATE' }
    else if(value >= 20) { score = 'FAIR' }

    return score.replaceAll(' ', separator)
  }

}
