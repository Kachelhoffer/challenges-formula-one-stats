import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, pipe, Subscription } from 'rxjs';
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

  constructor(private formulaOneAPIService:FormulaOneAPIService,
    private loaderService:LoaderService) { }
  

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


  //This onDestroy fucntions erves as the components Destructor, unsubscribing any appended subscriptions to avoid
  //subscription leaks
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe())
  }

}
