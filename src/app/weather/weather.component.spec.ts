import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import {AvgPrecipPipe, AvgTempPipe, WeatherTypeAltPipe, WeatherTypePipe} from '../avg-temp.pipe';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  const fakeData = {

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
      }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        WeatherTypePipe,
        WeatherTypeAltPipe,
        AvgPrecipPipe,
        AvgTempPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
  });

  it('Should render the page correctly', () => {
    component.data = fakeData;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
