import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
