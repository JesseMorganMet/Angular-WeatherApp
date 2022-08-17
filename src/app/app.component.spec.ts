import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BigWeatherComponent} from './big-weather/big-weather.component';
import {WeatherComponent} from './weather/weather.component';
import {FormControl} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {WeatherService} from './weather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  let fakeData: any = "Taunton";

  let fakeLocal: any = {"Locations":{"Location":[{"name": "Taunton", "id": "324072"}]}};

  let fakeLocalData: any =  {
    "SiteRep": {
      "DV": {
        "dataDate": "2022-08-15T09:00:00Z",
        "Location": {
          "i": "324072",
          "Period": [
            {
              "value": "2022-08-15Z",
              "Rep": [
                {
                  "Pp": "29",
                  "T": "17",
                  "W": "7",
                  "U": "1",
                },
                {
                  "Pp": "82",
                  "T": "18",
                  "W": "15",
                  "U": "2",
                },
                {
                  "Pp": "82",
                  "T": "20",
                  "W": "12",
                  "U": "4",
                },
                {
                  "Pp": "54",
                  "T": "23",
                  "W": "30",
                  "U": "3",
                },
                {
                  "Pp": "8",
                  "T": "21",
                  "W": "7",
                  "U": "1",
                },
                {
                  "Pp": "8",
                  "T": "20",
                  "W": "7",
                  "U": "0",
                }
              ]
            },
            {
              "value": "2022-08-16Z",
              "Rep": [
                {
                  "Pp": "57",
                  "T": "19",
                  "W": "30",
                  "U": "0",
                },
                {
                  "Pp": "8",
                  "T": "18",
                  "W": "7",
                  "U": "0",
                },
                {
                  "Pp": "57",
                  "T": "18",
                  "W": "30",
                  "U": "1",
                },
                {
                  "Pp": "58",
                  "T": "19",
                  "W": "30",
                  "U": "3",
                },
                {
                  "Pp": "14",
                  "T": "21",
                  "W": "7",
                  "U": "5",
                },
                {
                  "Pp": "77",
                  "T": "20",
                  "W": "30",
                  "U": "3",
                },
                {
                  "Pp": "61",
                  "T": "19",
                  "W": "29",
                  "U": "1",
                },
                {
                  "Pp": "58",
                  "T": "18",
                  "W": "30",
                  "U": "0",
                }
              ]
            },
            {
              "value": "2022-08-17Z",
              "Rep": [
                {
                  "Pp": "11",
                  "T": "18",
                  "W": "7",
                  "U": "0",
                },
                {
                  "Pp": "14",
                  "T": "17",
                  "W": "7",
                  "U": "0",
                },
                {
                  "Pp": "13",
                  "T": "17",
                  "W": "7",
                  "U": "1",
                },
                {
                  "Pp": "16",
                  "T": "18",
                  "W": "8",
                  "U": "3",
                },
                {
                  "Pp": "16",
                  "T": "20",
                  "W": "7",
                  "U": "5",
                },
                {
                  "Pp": "33",
                  "T": "21",
                  "W": "10",
                  "U": "3",
                },
                {
                  "Pp": "13",
                  "T": "21",
                  "W": "7",
                  "U": "1",
                },
                {
                  "Pp": "6",
                  "T": "20",
                  "W": "2",
                  "U": "0",
                }
              ]
            },
            {
              "value": "2022-08-18Z",
              "Rep": [
                {
                  "Pp": "6",
                  "T": "18",
                  "W": "7",
                  "U": "0",
                },
                {
                  "Pp": "2",
                  "T": "17",
                  "W": "2",
                  "U": "0",
                },
                {
                  "Pp": "3",
                  "T": "16",
                  "W": "3",
                  "U": "1",
                },
                {
                  "Pp": "3",
                  "T": "18",
                  "W": "3",
                  "U": "3",
                },
                {
                  "Pp": "3",
                  "T": "20",
                  "W": "3",
                  "U": "6",
                },
                {
                  "Pp": "3",
                  "T": "20",
                  "W": "3",
                  "U": "4",
                },
                {
                  "Pp": "5",
                  "T": "20",
                  "W": "3",
                  "U": "1",
                },
                {
                  "Pp": "11",
                  "T": "19",
                  "W": "8",
                  "U": "0",
                }
              ]
            },
            {
              "value": "2022-08-19Z",
              "Rep": [
                {
                  "Pp": "12",
                  "T": "19",
                  "W": "7",
                  "U": "0",
                },
                {
                  "Pp": "47",
                  "T": "19",
                  "W": "12",
                  "U": "0",
                },
                {
                  "Pp": "37",
                  "T": "19",
                  "W": "10",
                  "U": "1",
                },
                {
                  "Pp": "13",
                  "T": "18",
                  "W": "3",
                  "U": "3",
                },
                {
                  "Pp": "13",
                  "T": "19",
                  "W": "1",
                  "U": "6",
                },
                {
                  "Pp": "9",
                  "T": "19",
                  "W": "1",
                  "U": "3",
                },
                {
                  "Pp": "4",
                  "T": "18",
                  "W": "1",
                  "U": "1"
                },
                {
                  "Pp": "5",
                  "T": "18",
                  "W": "2",
                  "U": "0"
                }
              ]
            }
          ]
        }
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BigWeatherComponent,
        WeatherComponent
      ],
      imports: [
        MatFormFieldModule,
        HttpClientTestingModule,
        MatAutocompleteModule
      ],
      providers:[
        WeatherService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    component.myControl.patchValue(fakeData)
    component.locationNames = fakeLocal
    component.submitForm();
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot(); //not yet working

  });
});
