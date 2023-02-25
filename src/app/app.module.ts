import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/current-weather/card/header/header.component';
import { DataComponent } from './components/current-weather/card/data/data.component';
import { NextHourComponent } from './components/current-weather/card/next-hour/next-hour.component';
import { SunsetSunriseComponent } from './components/current-weather/card/sunset-sunrise/sunset-sunrise.component';
import { NextDayComponent } from './components/current-weather/card/next-day/next-day.component';
import { SearchComponent } from './components/current-weather/search/search.component';
import { CardComponent } from './components/current-weather/card/card.component';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
