
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnInit, OnDestroy {
    private unsubscribe: Subscription[] = [];

    //This behaviour subject keeps track of the laoding state of the app. Any component can subscribe to it
    isLoadingSubject: BehaviorSubject<boolean>;

    //This variable keeps track of the number of active loaders
    activeLoadersCount:number;


  //Initialization
  constructor() {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.activeLoadersCount = 0;
   }

   //This function is used to change the state of the laoder based on input. If it finds
   //loader already active it will increase the active loader count and vice versa
   setLoadingStatus(status:boolean){
        if(status)
        {
          this.activeLoadersCount++;
          this.isLoadingSubject.next(status)
        }
        else{
          this.activeLoadersCount--
          if(this.activeLoadersCount <= 0){
            this.isLoadingSubject.next(status)
          }
        }
   }
  
  ngOnInit(): void {
    
  }

  //This onDestroy fucntions erves as the components Destructor, unsubscribing any appended subscriptions to avoid
    //subscription leaks
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
