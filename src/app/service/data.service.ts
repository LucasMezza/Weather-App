import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ForecastData } from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})

export class DataService{

  constructor() { }
  
  currentSearch$: Subject<ForecastData> = new Subject<ForecastData>();

  setCurrentSearch(forecastData: ForecastData){
    this.currentSearch$.next(forecastData);
  }

  getCurrentSearch(){
    return this.currentSearch$.asObservable();
  }

}
