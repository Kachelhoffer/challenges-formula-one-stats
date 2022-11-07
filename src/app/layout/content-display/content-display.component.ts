import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WinnerModelType } from 'src/app/partials/card/card.component';
import { ChampionDriverListModelType, FormulaOneAPIService, RaceWinnersForYearType } from 'src/app/services/formula-one-api/formula-one-api.service';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss']
})
export class ContentDisplayComponent implements OnInit {

  @Input('displayStyle') displayStyle:string|undefined;

  private unsubscribe: Subscription[] = [];

  public apiResult?: string;

  //Variable to store Champions for year data. Gets passed down to children
  worldChampionList:ChampionDriverListModelType;

  //Variable that stores the race date. Gets passed down to children
  yearRaceData:RaceWinnersForYearType;

  worldChampionWinnerModel:WinnerModelType

  //This variable is used as a flag to turn the detail component display on or off depending on response info
  detailSelectionMade:boolean = false;

  constructor(
  private formulaOneAPIService:FormulaOneAPIService) 
  { }

  //This function executes one the selection event is emmited from the child componet
  yearRaceDetailRequested(winner:WinnerModelType)
  {
    if(winner)
    {
      this.detailSelectionMade = true
      this.worldChampionWinnerModel = winner;
      this.getDetailForWinnersOfYear(winner.season)
    }    
  }

  //This function is responsible for calling is relating API Service method which will retrieve the data for the list of
  //Word Champions in recent years since the year set in the enviroment variable
  getWorldChampionsList()
  {
    this.formulaOneAPIService.getWorldChampionsList()

    const subscr = this.formulaOneAPIService.championListSubject
    .subscribe((result)=>{
    if(result){
        // console.log("Champ List: " + JSON.stringify(result))
        this.worldChampionList = result;
    }      
    })
    this.unsubscribe.push(subscr);
  }

  //This function is responsible for callign its relating API Service which will retreive the data of all the races for
  //the specified year
  getDetailForWinnersOfYear(year:string){

    this.formulaOneAPIService.getDetailForWinnersOfYear(year)

    const subscr = this.formulaOneAPIService.yearDetailListSubject
    .subscribe((result)=>{
    if(result){
        // console.log("Year Info: " + JSON.stringify(result))
        this.yearRaceData = result;
    }      
    })
    this.unsubscribe.push(subscr);

  }

  //This function executes when the back button is clicked from the race-detail component. 
  //Here we reset the detail flag to return to normal display. We then call API to retreive data for relevant year
  navigateBackEventClicked(status:string){
    
    status ? this.detailSelectionMade = false : this.detailSelectionMade = true;
  }


  //Once the component has Initialized we action the API call to get the list of years and World Champions for
  //those relevant years
  ngOnInit(): void {
    this.getWorldChampionsList();
  }

}
