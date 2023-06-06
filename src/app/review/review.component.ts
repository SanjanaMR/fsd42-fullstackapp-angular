import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  ngOnInit(){
  }
  review = {
    rating: null,
    comment: ''
  };
  reviews = [
    { rating: 5, comment: 'Great!' },
    { rating: 4, comment: 'Good quality.' },
    { rating: 3, comment: 'Average.' },
    {rating: 2, comment: 'Below Average'},
    {rating: 1, comment: 'Not Satisfied'}
  ];

  constructor(private toastr: ToastrService) {}
  submitReview() {
    this.toastr.success("Thank you for the review!! Have a nice day!");
    this.review = {
      rating: null,
      comment: ''
    };
  }
}