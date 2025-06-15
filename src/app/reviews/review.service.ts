import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Review } from '../shared/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  $google_api = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${GOOGLE_PLACE_ID}&sensor=true&key=${API_KEY}`;
  errorMessage : string = "";

  constructor(private http : HttpClient) { }

  getAllReviews() : Observable<any> {
    return this.http.get(this.$google_api).pipe(map(place => place.map(result => result.reviews)));
  }
}
