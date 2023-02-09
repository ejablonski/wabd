/**
 * This excists just for easier scrapping of data from open meteo.
 */
export interface OpenMeteoDataModel {
  hourly: {
    rain: number[]
    showers: number[]
    snowfall: number[]
    temperature_2m: number[]
    pm2_5: number[]
    pm10: number[]
  }
}
