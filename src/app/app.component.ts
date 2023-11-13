import {Component} from '@angular/core';
import {WeatherService} from './weather.service';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';

@Component({
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
//just testing
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
    let location: any = this.filter(this.myControl.value);
    // Fix needed
    // location[0] always selects the top of the search
    // need to make the search go off with the selected option
    // i.e. e1, e2, e3, e4, e5. these are location options with e1 at the top
    // you select e5, e5 appears in the search bar however location[0] === e1
    // so e1 location data is retrieved
    this.service.getData(location[0].id).subscribe((data: any) => {
      this.weatherData = data;
      return this.weatherData;
    });
  }
}
