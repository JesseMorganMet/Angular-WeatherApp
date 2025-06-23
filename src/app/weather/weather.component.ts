import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() data;

  constructor() {
  }

  ngOnInit(): void {
  }
}
