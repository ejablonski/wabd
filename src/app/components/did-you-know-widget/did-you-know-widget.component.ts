import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Observable,
  Subscription
} from 'rxjs';

import { WikipediaService } from 'src/app/services/wikipedia.service';
import { DidYouKnowDataModel } from 'src/app/models/did-you-know-data.model';

/**
 * Widget that fetches random article from (by default) Wikipedia.
 */
@Component({
  selector: 'app-did-you-know-widget',
  templateUrl: './did-you-know-widget.component.html',
  styleUrls: ['./did-you-know-widget.component.scss']
})
export class DidYouKnowWidgetComponent implements OnInit, OnDestroy {
  dykData$: Observable<DidYouKnowDataModel> = new Observable<DidYouKnowDataModel>
  wikipediaSubscription: Subscription = new Subscription
  imgSource: string = ''

  constructor(private wikipediaService: WikipediaService) {}

  ngOnInit(): void {
    this.dykData$ = this.wikipediaService.getRandomArticle()
    this.wikipediaSubscription = this.dykData$.subscribe()
  }

  ngOnDestroy(): void {
    this.wikipediaSubscription.unsubscribe()
  }
}
