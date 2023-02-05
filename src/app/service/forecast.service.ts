import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ForecastService {

  apiKey: String = '';
  URL: String = '';

  constructor(private http: HttpClient) {
    this.URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
  }

  getForecastData(cityName : string){
    return this.http.get(`${this.URL}${cityName}`);
  }

}
