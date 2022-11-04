import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ChampionDriverListModel } from 'src/app/models/ChampionDriverListModel';
import { LoaderService } from '../loader/loader.service';

export type ChampionDriverListModelType = ChampionDriverListModel | undefined;

@Injectable({
  providedIn: 'root'
})
export class FormulaOneAPIService implements OnInit, OnDestroy {

  //These 3 variables allow us to determine the optimal offset to provide to the API. This ensures the smallest API calll needed
  //to implement requirement of reporting from 2015 onward 
  minYearOfResults:number = 1950;
  reportingResultsYearStart:number = environment.reportingYearStart;
  yearOffset =  this.reportingResultsYearStart - this.minYearOfResults

  //This is a subject that stores the curtrent result returned from API. Its of type Behaviour Subject to allow
  //us to subscribe to it later in other components.
  championListSubject: BehaviorSubject<ChampionDriverListModelType>;
  private unsubscribe: Subscription[] = [];

  //Variable to store api response
  public apiResult?: string;

  constructor(private http: HttpClient, private loaderService:LoaderService) {
    this.championListSubject = new BehaviorSubject<ChampionDriverListModelType>(undefined);
   }
  

   //This is the API Method Call for Getting Word Champion List. We subscribe to the result
   // and store it in behavioursubject for later use across components.
  getWorldChampionsList(){

    this.loaderService.setLoadingStatus(true)
    console.log("getWorldChampionsList Loading True")
    
    const subscr = this.http.get(`${environment.API_BASE_URL}driverStandings/1.json?offset=${this.yearOffset}`)
    .pipe(
    finalize(() => {
        this.loaderService.setLoadingStatus(false)
    })
    )
    .subscribe((result:any)=>{
    if(result){
        this.championListSubject.next(result);
    }      
    },
    error => this.setErrorOutput(error)
    )
    this.unsubscribe.push(subscr);

  }

    ngOnInit(){
      
    }

    //This function is used to write relevant API errors into the console for debug purposes
    setErrorOutput(error: any) {
      // this.errorService.showError(error)
      this.apiResult = `ERROR: ${error.status} ${error.statusText}\n${JSON.stringify(error.error)}\n${error.url}`;
      console.error(`ERROR: ${error.status} ${error.statusText} ${JSON.stringify(error.error)}`);
    }
  
    //This onDestroy fucntions erves as the components Destructor, unsubscribing any appended subscriptions to avoid
    //subscription leaks
    ngOnDestroy(): void {
      this.unsubscribe.forEach((sb) => sb.unsubscribe())
    }
}
