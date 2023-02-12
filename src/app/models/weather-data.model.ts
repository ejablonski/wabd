export interface WeatherDataModel {
  temp: number[]
  snowfall: number[]
  rain: number[]
  showers: number[]
  european_aqi: number[]
  chartData: { data: number[] }[]
}
