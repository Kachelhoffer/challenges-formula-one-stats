import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-style',
  templateUrl: './display-style.component.html',
  styleUrls: ['./display-style.component.css']
})
export class DisplayStyleComponent implements OnInit {

  displayStyle = ""
  optionSelected = false;

  constructor() { }

  //This function handels the selection option of the user. It toggles optionSelected and sends the relevant selection
  //through to the child component
  selectedOption(option: string)
  {
    this.displayStyle = option;
    this.optionSelected = true;
  }

  ngOnInit(): void {
  }

}
