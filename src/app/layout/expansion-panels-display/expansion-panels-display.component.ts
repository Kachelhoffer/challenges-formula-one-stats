import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WinnerModelType } from 'src/app/partials/card/card.component';
import { ChampionDriverListModelType } from 'src/app/services/formula-one-api/formula-one-api.service';

@Component({
  selector: 'app-expansion-panels-display',
  templateUrl: './expansion-panels-display.component.html',
  styleUrls: ['./expansion-panels-display.component.scss']
})
export class ExpansionPanelsDisplayComponent{

  //Variable to store Champions for year data. Gets passed down to children
  // worldChampionList:ChampionDriverListModelType;
  @Input('worldChampionList') worldChampionList:ChampionDriverListModelType;
  @Output("yearRaceDetailRequestedEvent") yearRaceDetailRequestedEvent = new EventEmitter<WinnerModelType>();

  worldChampionWinnerModel:WinnerModelType

  constructor() { }

  //This function is responsible for handling the winner object returned from the child card Component. 
  //From here we can provide the relevant info to the Race Detail component
  yearRaceDetailRequested(winner:WinnerModelType)
  {
    if(winner)
    {
      this.worldChampionWinnerModel = winner;
      this.yearRaceDetailRequestedEvent.emit(winner)
    }    
  }

}
