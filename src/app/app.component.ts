import {Component} from '@angular/core';
import {WeatherService} from './weather.service';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Weather App';
  locationNames: any = [];
  index: number = 0;
  days
  myControl: FormControl = new FormControl();
  filteredLocationNames: Observable<any[]>;
  weatherData: any;

  constructor(private service: WeatherService) {
  }

  ngOnInit() {
    this.locationFunctions()
  }

  locationFunctions() {
    this.service.getLocation().subscribe((data: any) => {
      this.locationsSearch(data);
      this.locationSort(this.locationNames);
      this.locationFilter(this.locationNames);
    })
  }

  locationsSearch(data) {
    for (let i = 0; i < data.Locations.Location.length; i++) {
      const location = data.Locations.Location[i];
      this.locationNames.push({name: location.name, id: location.id});
    }
    return this.locationNames;
  }

  locationSort(data) {
    data.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return data;
  }

  locationFilter(data) {
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
  }

  submitForm() {
    let locations: any = this.filter(this.myControl.value);
    let location;
    for(let i = 0; i < locations.length; i++) {
      if(locations[i].name == this.myControl.value){
        location = locations[i];
      }
    }
    this.service.getData(location.id).subscribe((data: any) => {
      this.weatherData = data;
      return this.weatherData;
    });
  }
}
