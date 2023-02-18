import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ForecastService } from 'src/app/service/forecast.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor( private forecastService: ForecastService, private dataService: DataService) { }

  ngOnInit(): void {
    this.search();
    this.cityName = '';
  }

  cityName: string = 'Chivilcoy';
  @Output('searchResult') searchResultEmitter!: EventEmitter<string>;

  search(){
    this.forecastService.getForecastData(this.cityName).subscribe(
      data => {
        this.dataService.setCurrentSearch(data);
        console.log(data);
      }
    )
  }
}

// interceptor
