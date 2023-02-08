import { Component } from '@angular/core';

/**
 * Widget that fetches random article from (by default) Wikipedia.
 */
@Component({
  selector: 'app-did-you-know-widget',
  templateUrl: './did-you-know-widget.component.html',
  styleUrls: ['./did-you-know-widget.component.scss']
})
export class DidYouKnowWidgetComponent {
  img: string = ''
  content: string = 'Did you know?'
  sourceName: string = 'Wikipedia'
  sourceUrl: string = 'en.wikipedia.org'

  onClick() {
    // todo: open new link defined in sourceUrl: string
  }
}
