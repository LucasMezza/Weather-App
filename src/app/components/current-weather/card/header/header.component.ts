import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastData } from 'src/app/models/forecast.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  constructor( private dataService : DataService ) { }
  
  forecast!: ForecastData;
  dateToday: Date = new Date();

  ngOnInit(){
    this.dataService.getCurrentSearch().subscribe(
      data => {
        this.forecast = data;
      }
    )
  }
}
