import { ChangeDetectorRef, Component, Inject, Input, OnInit} from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})



export class LoaderComponent implements OnInit {


    isLoading: boolean = false;

    loaderWidthString:string = "100%"


    constructor(private loaderService: LoaderService, private cd: ChangeDetectorRef){
    }

    ngOnInit() {
        this.loaderService.isLoadingSubject.subscribe((result:boolean) => {
            this.isLoading = result
            this.cd.detectChanges();
        })
    }

}