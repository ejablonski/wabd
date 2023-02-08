import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  throwError
} from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';

import { DidYouKnowDataModel } from '../models/did-you-know-data.model';
import { WikipediaRandomPageDataModel } from '../models/wikipedia.model';

/**
 * This service is fetching data from Wikipedia REST API. Covers version 1
 * of the API.
 * 
 * @remarks
 * Not all request are covered by this service. Only stuff needed
 * by DidYouKnowWidget.
 * 
 * @see {@link https://en.wikipedia.org/api/rest_v1} for more info
 */
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private randomArticleRequestUrl: string = 'https://en.wikipedia.org/api/rest_v1/page/random/summary'

  constructor(private httpClient: HttpClient) {}

  /**
   * Make an request for a random wikipedia article.
   * @remarks Response will be translated to DidYouKnowData model.
   * @returns DidYouKnowData observable.
   * @throws New observable if request cannot be made.
   */
  getRandomArticle(): Observable<DidYouKnowDataModel> {
    return this.httpClient
      .get<WikipediaRandomPageDataModel>(this.randomArticleRequestUrl)
      .pipe(
        map(responseData => {
          let randomArticle: DidYouKnowDataModel = {
            articleTitle: responseData.title,
            articleExcerpt: responseData.extract,
            articleSource: responseData.content_urls.desktop.page,
            sourceIcon: responseData.thumbnail.source
          }
          return randomArticle
        }),
        catchError(errorData => throwError(errorData))
      )
  }
}
