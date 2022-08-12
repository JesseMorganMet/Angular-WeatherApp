import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-big-weather',
  templateUrl: './big-weather.component.html',
  styleUrls: ['./big-weather.component.scss']
})
export class BigWeatherComponent implements OnInit {

  @Input() placeName;
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }
}
