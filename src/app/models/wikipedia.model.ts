/**
 * Model for random page call from Wikipedia REST API. Covers version 1
 * of the API.
 * 
 * @remarks
 * This model do not cover whole response - only stuff needed by
 * DidYouKnowModel.
 * 
 * @see {@link https://en.wikipedia.org/api/rest_v1} for more info
 */
export interface WikipediaRandomPageDataModel {
  content_urls: {
    desktop: {
      page: string
    }
  }
  extract: string
  title: string
  thumbnail: {
    source: string
  }
}
