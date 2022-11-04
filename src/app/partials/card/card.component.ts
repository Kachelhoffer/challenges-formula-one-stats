import { Component, Input, OnInit } from '@angular/core';
import { WinnerModel } from 'src/app/models/WinnerModel';

export type WinnerModelType = WinnerModel | undefined;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('winner') winner:WinnerModelType;

  constructor() { }

  ngOnInit(): void {
  }

}
