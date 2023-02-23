import { Component, Input, OnInit } from '@angular/core';
import { ForecastData } from 'src/app/models/forecast.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sunset-sunrise',
  templateUrl: './sunset-sunrise.component.html',
  styleUrls: ['./sunset-sunrise.component.css']
})

export class SunsetSunriseComponent implements OnInit{

  constructor( private dataService : DataService ) { }

  sunrise!: string;  
  sunset!: string;
  forecast!: ForecastData;
 
  ngOnInit(){
    this.dataService.getCurrentSearch().subscribe(
      data => {
        this.forecast = data;
        console.log(data.city.sunset);
        this.sunrise = this.convertMillisecondsToHours(data.city.sunrise);
        this.sunset = this.convertMillisecondsToHours(data.city.sunset);
      }
    );
  }

  convertMillisecondsToHours( milliseconds: number){
    return new Date(milliseconds).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false});
  }
}



