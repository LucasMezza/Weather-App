import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private wetherService: WeatherService) { }

  cityName: string = 'Chivilcoy';
  weather: any;
  forecast: any;
  
  ngOnInit() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    if(this.cityName){
      this.getWeather(this.cityName);
      this.cityName = '';
    }
    else{
      alert('Please, insert some city');
    }
    
  }

  private getWeather(cityName: string){
    this.wetherService.getWeatherData(cityName)
    .subscribe(
      res => {
        console.log(res),
        this.weather = res},
      err => console.log(err)
    );
  }
}
