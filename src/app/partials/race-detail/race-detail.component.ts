import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormulaOneAPIService, RaceWinnersForYearType } from 'src/app/services/formula-one-api/formula-one-api.service';
import { WinnerModelType } from '../card/card.component';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit  {
  
  @Input('yearRaceData') yearRaceData:RaceWinnersForYearType;
  @Input('worldChampionWinnerModel') worldChampionWinnerModel:WinnerModelType;

  @Output("navigateBackEvent") navigateBackEvent = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef, private formulaOneAPIService:FormulaOneAPIService) { }

  navigateBackClicked(){
    this.navigateBackEvent.emit("activated");
  }

  getRaces(){
    if(this.yearRaceData)
    {
      console.log("Returning: " + this.yearRaceData.MRData.RaceTable.Races)
      // return this.yearRaceData.MRData.RaceTable.Races
    }
    // else{
    //   console.log("No Race Data Found")
    //   return
    // }
  }

  ngOnInit(): void {

    // this.getDetailForWinnersOfYear(this.yearRaceData.MRData.RaceTable.season)
  }

}
