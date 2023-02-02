import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: String = '';

  constructor( private http: HttpClient) { 

    this.URL = ``;
    
  }
    
    getWeatherData(cityName : string){
    }
}
