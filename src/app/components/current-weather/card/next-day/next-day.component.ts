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
