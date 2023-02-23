import { Component } from '@angular/core';
import { ForecastData } from 'src/app/models/forecast.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-next-day',
  templateUrl: './next-day.component.html',
  styleUrls: ['./next-day.component.css']
})  
export class NextDayComponent {

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
    const pivot = this.list[4].dt_txt.split(" ")[1];
    this.list.forEach((list: any) => {
    if( list.dt_txt.split(" ")[1] === pivot){
      this.days.push(list);
    }
    } )
  }
}
