import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

//Angular Material Imports
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CardComponent } from './partials/card/card.component';
import { ExpansionPanelComponent } from './partials/expansion-panel/expansion-panel.component';
import { CardsDisplayComponent } from './layout/cards-display/cards-display.component';
import { ExpansionPanelsDisplayComponent } from './layout/expansion-panels-display/expansion-panels-display.component';
import { LoaderComponent } from './partials/loader/loader.component';
import { RaceDetailComponent } from './partials/race-detail/race-detail.component';
import { RaceItemComponent } from './partials/race-item/race-item.component';
import { ContentDisplayComponent } from './layout/content-display/content-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ExpansionPanelComponent,
    CardsDisplayComponent,
    ExpansionPanelsDisplayComponent,
    LoaderComponent,
    RaceDetailComponent,
    RaceItemComponent,
    ContentDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
