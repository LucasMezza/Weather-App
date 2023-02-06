import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastData } from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})

export class ForecastService {

  apiKey: String = '';
  URL: String = '';

  constructor(private http: HttpClient) {
    this.URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
  }

  getForecastData(cityName : string): Observable<ForecastData>{
    return this.http.get<ForecastData>(`${this.URL}${cityName}`);
  }

}
