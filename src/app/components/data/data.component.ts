import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  // constructor( private weatherService: WeatherService) { }

  // cityName: string = 'Chivilcoy';
  //weather!: WeatherData;
  
  ngOnInit() {
  //   this.getWeather(this.cityName);
  }

  // private getWeather(cityName: string){
  //   this.weatherService.getWeatherData(cityName)
  //   .subscribe(
  //     res => {
  //       console.log(res),
  //       this.weather = res},
  //     err => console.log(err)
  //   );
  // }

}
