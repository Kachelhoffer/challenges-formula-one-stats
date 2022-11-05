import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, pipe, Subscription } from 'rxjs';
import { WinnerModelType } from 'src/app/partials/card/card.component';
import { ChampionDriverListModelType, FormulaOneAPIService } from 'src/app/services/formula-one-api/formula-one-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-cards-display',
  templateUrl: './cards-display.component.html',
  styleUrls: ['./cards-display.component.css']
})
export class CardsDisplayComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];

  public apiResult?: string;

  worldChampionList:ChampionDriverListModelType;

  //This variable is used as a flag to turn the detail component display on or off depending on response info
  detailSelectioMade:boolean = false;

  constructor(
    private formulaOneAPIService:FormulaOneAPIService,
    private loaderService:LoaderService
    ) { }
  
  //Once the component has Initialized we action the API call to get the list of years and World Champions for
  //those relevant years
  ngOnInit(): void {
    this.getWorldChampionsList();
  }

  //This function is responsible for calling is relating API Service method which will retrieve the data for the lsit of
  //Word Champions in recent years since the year set in the enviroment variable
  getWorldChampionsList()
  {
    this.formulaOneAPIService.getWorldChampionsList()

    const subscr = this.formulaOneAPIService.championListSubject
    .subscribe((result)=>{
    if(result){
        console.log("Champ List: " + JSON.stringify(result))
        this.worldChampionList = result;
    }      
    })
    this.unsubscribe.push(subscr);
  }

  //This function is responsible for handling the winner object returned from the child card Component. 
  //From here we can provide the relevant info to the Race Detail component
  yearRaceDetailRequested(winner:WinnerModelType)
  {
    winner ? this.detailSelectioMade = true : this.detailSelectioMade = false;
  }

  //This function executes when the back button is clicked from the race-detail component. 
  //Here we simply reset the detail flag to return to normal display
  navigateBackEventClicked(status:string){
    status ? this.detailSelectioMade = false : this.detailSelectioMade = true;
  }


  //This onDestroy fucntions erves as the components Destructor, unsubscribing any appended subscriptions to avoid
  //subscription leaks
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe())
  }

}
