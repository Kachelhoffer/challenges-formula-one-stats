import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { WinnerModelType } from 'src/app/partials/card/card.component';
import { ChampionDriverListModelType, FormulaOneAPIService, RaceWinnersForYearType } from 'src/app/services/formula-one-api/formula-one-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-cards-display',
  templateUrl: './cards-display.component.html',
  styleUrls: ['./cards-display.component.css']
})
export class CardsDisplayComponent{

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
