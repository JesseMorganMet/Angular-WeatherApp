import { Component } from '@angular/core';
import {WeatherService} from './weather.service';
import {FormControl, FormGroup} from '@angular/forms';
import {filter, map, Observable, startWith} from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Weather App';
  locationNames:any = [];
  index:number = 0;
  days
  myControl: FormControl = new FormControl();
  filteredLocationNames: Observable<any[]>;
  weatherData:any;

  constructor(private service:WeatherService) {
  }
  ngOnInit() {
    //search for location
    this.service.getLocation().subscribe((data:any) => {
    console.log(data);
      for(let i=0;i<data.Locations.Location.length;i++){
        const location = data.Locations.Location[i];
        this.locationNames.push({name:location.name, id:location.id});
      }
      //search for location

      // sort alpha "borrowed code"
      this.locationNames.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1; //nameA comes first
        }
        if (nameA > nameB) {
          return 1; // nameB comes first
        }
        return 0;  // names must be equal
      });
      //sort alpha

      //filter to type live
      this.filteredLocationNames = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter(val))
        );
    })

  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locationNames.filter(location => {
      return location.name.toLowerCase().includes(filterValue)
    });
    //filter to type live
  }

  submitForm(){
    let location: any = this.filter(this.myControl.value);
    this.service.getData(location[0].id).subscribe((data:any) => {
      this.weatherData = data;
      console.log(this.weatherData);
      console.log(this.weatherData.SiteRep.DV.dataDate)

    });
    console.log(location[0].id);
  }

}
