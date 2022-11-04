
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnInit, OnDestroy {
    private unsubscribe: Subscription[] = [];

    isLoadingSubject: BehaviorSubject<boolean>;

    activeLoadersCount:number;


  constructor() {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.activeLoadersCount = 0;
   }

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
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
