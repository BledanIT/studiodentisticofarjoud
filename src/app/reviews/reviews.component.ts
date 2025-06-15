import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { ReviewService } from './review.service';
import { Review } from '../shared/models/review';
import { Observable, catchError } from 'rxjs';
import "../environment";

declare const google : any;

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, MaterialsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {

  reviews! : Observable<Review[]>;
  errorMessage : string = "";
  /*service : any;
  public reviews : any = [];*/

  constructor(private reviewService : ReviewService) {}

  ngOnInit(): void {
    this.reviews = this.reviewService.getAllReviews().pipe(
      catchError(error => {
        this.errorMessage = error;
      })
    );
  }

  createRange(number : number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
