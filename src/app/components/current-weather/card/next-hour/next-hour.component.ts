import { Component, OnInit } from '@angular/core';
import { ForecastData } from 'src/app/models/forecast.model';
import { DataService } from 'src/app/service/data.service';


const corte = 11;
@Component({
  selector: 'app-next-hour',
  templateUrl: './next-hour.component.html',
  styleUrls: ['./next-hour.component.css']
})

export class NextHourComponent implements OnInit{

  constructor( private dataService : DataService ) { }
  
  forecast!: ForecastData;
  days: any = [];
  list: any = [];

  ngOnInit(){
    this.dataService.getCurrentSearch().subscribe(
      data => {
        this.forecast = data;
        this.list = data.list;
        this.getDays();
      }
    )
  }

  getDays(){ 
    this.days = [];
    for (let i = 0; i < 12; i++) {
      this.days.push(this.list[i]); 
    }
  }
}
