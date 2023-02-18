import { Component, Input } from '@angular/core';
import { ForecastData } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data!: ForecastData;

}
