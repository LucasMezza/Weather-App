import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey: String = '';
  URL: String = '';

  constructor( private http: HttpClient) { 
    this.URL = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }
    
  getWeatherData(cityName : string) : Observable<WeatherData>{
    return this.http.get<WeatherData>(`${this.URL}${cityName}`);
  }

}