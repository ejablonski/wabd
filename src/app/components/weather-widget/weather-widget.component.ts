export class Widget {
  whatever: string

  constructor(whatev: string) {
    this.whatever = whatev
  }
}

export class WeatherWidgetComponent extends Widget {
  something: string

  constructor(whatev: string, something: string) {
    super(whatev)

    this.something = something
  }
}
