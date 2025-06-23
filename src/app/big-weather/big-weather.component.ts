import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-big-weather',
  templateUrl: './big-weather.component.html',
  styleUrls: ['./big-weather.component.scss'],

})
export class BigWeatherComponent implements OnInit {

  @Input() placeName;
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }
}
