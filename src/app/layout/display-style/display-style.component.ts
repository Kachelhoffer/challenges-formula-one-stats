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

  selectedOption(option: string)
  {
    this.displayStyle = option;
    this.optionSelected = true;
  }

  ngOnInit(): void {
  }

}
