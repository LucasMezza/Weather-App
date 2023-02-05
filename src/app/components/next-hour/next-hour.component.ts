import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/service/forecast.service';

@Component({
  selector: 'app-next-hour',
  templateUrl: './next-hour.component.html',
  styleUrls: ['./next-hour.component.css']
})
export class NextHourComponent implements OnInit{

  // constructor ( private forecastService: ForecastService) { }

  // cityName: string = 'Chivilcoy';
  // forecast: any;

  ngOnInit(){
  //   this.getForecast(this.cityName);
  }

  // private getForecast(cityName: string){
  //   this.forecastService.getForecastData(cityName)
  //   .subscribe(
  //     res => {
  //       console.log(res),
  //       this.forecast = res},
  //     err => console.log(err)
  //   );
  // }
}
