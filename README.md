# FormulaOneStats

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

This project uses the [Ergast](http://ergast.com/mrd/) API to display a list of formula 1 races and the relevant world champions. YOu can then select a year and retreive additional information about the races of that year. Once a year is selected you will see all the winners of that year and the world champion's winnign races will be highlighted for that relevant year

The app provides a multi laoyout for user experience. You an select between lsit based display and a card based display 

## First time Setup

1) Clone the repo into a directory.
2) Install dependencies (if you receive a conflict use the --legacy-peer-deps flag)
3) Serve the application

CLI Commands:
    git clone https://github.com/Kachelhoffer/challenges-formula-one-stats.git
    npm install
    ng serve


## Project Structure - Summary of relevant componets

|-- app
    |-- layout
        |-- cards-display
            |-- cards-display.component.ts
            |-- cards-display.component.css
            |-- cards-display.component.html
        |-- content-display
            |-- content-display.component.ts
            |-- content-display.component.css
            |-- content-display.component.html
        |-- display-style
            |-- display-style,component.ts
            |-- display-style,component.css
            |-- display-style,component.html
        |-- expansion-panels-display
            |-- expansion-panels-display.ts
            |-- expansion-panels-display.css
            |-- expansion-panels-display.html
        |-- header
            |-- header.component.ts
            |-- header.component.css
            |-- header.component.html
    |-- models
        |-- ChampionDriverListModel.ts
        |-- CircuitModel.ts
        |-- DriverModel.ts
        |-- DriverStandingsModel.ts
        |-- RaceModel.ts
        |-- RaceResultModel.ts
        |-- RaceWinnersForYear.ts
        |-- WinnerModel.ts
    |-- partials
        |-- card
            |-- card.component.ts
            |-- card.component.css
            |-- card.component.html
        |-- expansion-panel
            |-- expansion-panel.component.ts
            |-- expansion-panel.component.css
            |-- expansion-panel.component.html
        |-- loader
            |-- loader.component.ts
            |-- loader.component.css
            |-- loader.component.html
        |-- race-detail
            |-- race-detail.component.ts
            |-- race-detail.component.css
            |-- race-detail.component.html
        |-- race-item
            |-- race-item.component.ts
            |-- race-item.component.css
            |-- race-item.component.html
    |-- services
        |-- formula-one-api
            |-- formula-one-api.service.ts
        |-- loader
            |-- loader.service.ts
    |-- app.component.html
    |-- app.component.ts
    |-- styles.scss
|-- environments
    |-- environment.prod.ts
    |-- environment.ts
|-- styles.css

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# challenges-formula-one-stats
