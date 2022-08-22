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
    this.locationsSearch(data);
    this.locationSort(this.locationNames);
    this.locationFilter(this.locationNames);

    })
  }

  locationsSearch(data){
    for(let i=0;i<data.Locations.Location.length;i++){
        const location = data.Locations.Location[i];
        this.locationNames.push({name:location.name, id:location.id});
      }
    return this.locationNames;
  }

  locationSort(data){
    data.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1; //nameA comes first
        }
        if (nameA > nameB) {
          return 1; // nameB comes first
        }
        return 0;  // names must be equal
      });
    return data;
  }

  locationFilter(data){
    this.filteredLocationNames = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    return this.filteredLocationNames;
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locationNames.filter(location => {
      return location.name.toLowerCase().includes(filterValue)
    });
    //filter to type live
  }

  submitForm(){
    let location: any = this.filter(this.myControl.value);
    this.service.getData(location[0].id).subscribe((data:any) => {

      console.log(data)
      this.weatherData = data;
      console.log(this.weatherData);
      console.log(location[0].id);
      console.log(this.weatherData.SiteRep.DV.dataDate)
      return this.weatherData;
    });

  }

}
