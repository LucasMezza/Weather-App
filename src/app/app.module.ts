import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './components/data/data.component';
import { NextHourComponent } from './components/next-hour/next-hour.component';
import { SunsetSunriseComponent } from './components/sunset-sunrise/sunset-sunrise.component';
import { NextDayComponent } from './components/next-day/next-day.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CurrentWeatherComponent,
    HeaderComponent,
    DataComponent,
    NextHourComponent,
    SunsetSunriseComponent,
    NextDayComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
