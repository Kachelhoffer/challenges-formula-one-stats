import { Component, Input, OnInit } from '@angular/core';
import { RaceModel } from 'src/app/models/RaceModel';

@Component({
  selector: 'app-race-item',
  templateUrl: './race-item.component.html',
  styleUrls: ['./race-item.component.scss']
})
export class RaceItemComponent implements OnInit {

  @Input('race') race:RaceModel|undefined;
  @Input('worldChampionDriverID') worldChampionDriverID:string|undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
