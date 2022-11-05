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

Navigate to `http://localhost:4200/`


## Architectural summary

The main project is divides up into the foillowing folders within the app folder

layout, models, partials, services

The project has seperated Services(Used for calling API methods and runnign the loader service), models(Used to strongly type data and allow intellisence), partials(individual components that serve as some sort of partial - can be called in multiple components), and layout(components used to structure the layout of the page.)

The partials and layout are seperated in such a way that it is easy to identify when a component is responsible for making some larger layout decision or if its a small piec of the pizzle fitted into place. The API calls are seperated from the application logic into the formula-one-api-service, such that it can be injected when needed. Some environment variables are in use to set the default API route and the minimum year to retreive data from. This is used to dynamiclly calculate the offset and call the API for the smallest possible subset of data.

there is also some minimal unit test coverage using jasmine and karma.


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
