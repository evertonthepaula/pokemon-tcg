/*
  Cards Query Parameters - **All query parameters are optional**
*/

export interface CardsRequest {
  // The page of data to access
  page: number;
  // The maximum amount of cards to return.	250 (max of 250)
  pageSize: number;
  // 	The field(s) to order the results by. Examples can be found below.
  orderBy?: number;
  // The search query
  q?: string;
  // A comma delimited list of fields to return in the response (ex. ?select=id,name). By default, all fields are returned if this query parameter is not used.
  select?: Array<string>;
}

// Fetch the details of a single card.
export interface CardDetailsRequest {
  // The Id of the card
  id: string;
  // A comma delimited list of fields to return in the response (ex. ?select=id,name). By default, all fields are returned if this query parameter is not used.
  select?: Array<string>;
}
