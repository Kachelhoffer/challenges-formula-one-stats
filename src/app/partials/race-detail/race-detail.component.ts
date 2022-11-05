import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {
  
  @Input (" yearRaceData:any") yearRaceData:any

  @Output("navigateBackEvent") navigateBackEvent = new EventEmitter<string>();

  constructor() { }

  navigateBackClicked(){
    this.navigateBackEvent.emit("activated");
  }

  ngOnInit(): void {
  }

}
