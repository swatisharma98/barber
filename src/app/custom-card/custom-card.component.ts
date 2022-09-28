import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }
  panelOpenState = false;

}
