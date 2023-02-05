import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  // constructor( private weatherService: WeatherService ) { }

  // weather: any;
  // cityName: string = 'Chivilcoy';
  dateToday: Date = new Date();

   ngOnInit(){
  //   this.getWeather(this.cityName);
  //   this.cityName = '';
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
