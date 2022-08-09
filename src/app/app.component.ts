import { Component } from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';
  locationNames:any = [];
  constructor(private service:WeatherService) {
  }
  ngOnInit() {
    this.service.getLocation().subscribe((data:any) => {
    console.log(data);
      for(let i=0;i<data.Locations.Location.length;i++){
        const location = data.Locations.Location[i];
        this.locationNames.push({name:location.name, id:location.id});
      }
      console.log(this.locationNames);
    })
  }
}
