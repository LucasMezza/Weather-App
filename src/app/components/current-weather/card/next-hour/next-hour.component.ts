import { Component, OnInit } from '@angular/core';
import { ForecastData } from 'src/app/models/forecast.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-next-hour',
  templateUrl: './next-hour.component.html',
  styleUrls: ['./next-hour.component.css']
})
export class NextHourComponent implements OnInit{

  constructor( private dataService : DataService ) { }
  
  forecast!: ForecastData;
  days!: any;

  ngOnInit(){
    this.dataService.getCurrentSearch().subscribe(
      data => {
        this.forecast = data;
      }
    )

    this.getDays();
  }

  getDays(){ 
    this.forecast.list.forEach(obj => {this.days = obj.dt_txt} )
  }
}
