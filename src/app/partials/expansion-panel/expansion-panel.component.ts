import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WinnerModelType } from '../card/card.component';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  panelOpenState = false;

  //Input Variable used to display current instance for view purposes
  @Input('winner') winner:WinnerModelType;

  //Output variable to emit request for data
  @Output("yearRaceDetailRequested") yearRaceDetailRequested = new EventEmitter<WinnerModelType>();

  constructor() { }

  //When the Race detail button is clicked, we emit an event to the parent component with the relevant winner object.
  //This object contains both the season/year and the info of the champion to allow row highlighting
  raceDetailHasBeenRequested(){
    this.winner ? this.yearRaceDetailRequested.emit(this.winner) : "";
  }

  ngOnInit(): void {
  }

}
