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
  days!: any;
  list!: any;

  ngOnInit(){
    this.dataService.getCurrentSearch().subscribe(
      data => {
        this.forecast = data;
        this.list = data.list;
      }
    )

    this.getDays();
    console.log(this.days);
  }
  
  getDays(){ 
   //this.list.forEach((obj: { dt_txt: any; }) => {this.days = obj.dt_txt} )
   //this.days = this.list.filter((day: { dt_txt: any; }) => day.dt_txt);
  }

  get5days(){
    console.log(this.days);
  }

}
