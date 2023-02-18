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

  sunrise!: number;  
  sunset!: number;
  rodri!: string;
  forecast!: ForecastData;
 
  ngOnInit(){
    this.dataService.getCurrentSearch().subscribe(
      data => {
        this.forecast = data;
        this.sunrise = data.city.sunrise;
        this.sunset = data.city.sunset;
        console.log(data.city.sunset);
      }
    );

    this.rodri = this.convertMillisecondsToHours(this.sunrise);
    //this.sunset = this.convertMillisecondsToHours(1676674357);
    console.log(this.sunrise);
    console.log("hola", this.rodri)
  }

   

  convertMillisecondsToHours( milliseconds: number){
    return new Date(milliseconds).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false});
  }
}

// 1676626551

// 1676674357


