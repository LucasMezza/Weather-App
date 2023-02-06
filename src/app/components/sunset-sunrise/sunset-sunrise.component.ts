import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-sunset-sunrise',
  templateUrl: './sunset-sunrise.component.html',
  styleUrls: ['./sunset-sunrise.component.css']
})

export class SunsetSunriseComponent implements OnInit{

  // constructor ( private weatherService: WeatherService) { }

  // cityName: string = 'Chivilcoy';
  // weather!: WeatherData;
  // sunrise!: number;
  // sunset!: number;
  
  ngOnInit() {
  //   this.getWeather(this.cityName);
  //   this.convertMillisecondsToHoursSunrise(1675329635);
  //   this.convertMillisecondsToHoursSunset(1675329635);
   }

  // private getWeather(cityName: string){
  //   this.weatherService.getWeatherData(cityName)
  //   .subscribe(
  //     res => {
  //       console.log(res),
  //       this.weather = res,
  //       this.sunrise = res.sys.sunrise,
  //       this.sunset = res.sys.sunset},
  //     err => console.log(err)
  //   );
  // }

  // convertMillisecondsToHoursSunrise( milliseconds: number){
  //   this.sunrise = +(new Date(milliseconds).toLocaleTimeString('en-US', { 
  //     hour: '2-digit', 
  //     minute: '2-digit', 
  //     hour12: false}));
  // }

  // convertMillisecondsToHoursSunset( milliseconds: number){
  //   this.sunset = +(new Date(milliseconds).toLocaleTimeString('en-US', { 
  //     hour: '2-digit', 
  //     minute: '2-digit', 
  //     hour12: false}));
  // }
}


