import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWeatherComponent } from './big-weather.component';
import {maxTempPipe, minTempPipe, uvPipe, WeatherTypeAltPipe, WeatherTypePipe, WTypePipe} from '../avg-temp.pipe';

describe('BigWeatherComponent', () => {
  let component: BigWeatherComponent;
  let fixture: ComponentFixture<BigWeatherComponent>;

  const fakeData = {
    "Rep": [{
      "T": "17",
      "W": "7",
      "U": "1"
    },
      {
        "T": "18",
        "W": "15",
        "U": "2"
      },
      {
        "T": "20",
        "W": "12",
        "U": "4"
      },
      {
        "T": "23",
        "W": "30",
        "U": "3",
      },
      {
        "T": "21",
        "W": "7",
        "U": "1"
      },
      {
        "T": "20",
        "W": "7",
        "U": "0"
      }
    ]
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BigWeatherComponent,
        WeatherTypePipe,
        WeatherTypeAltPipe,
        WTypePipe,
        maxTempPipe,
        minTempPipe,
        uvPipe
      ]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigWeatherComponent);
    component = fixture.componentInstance;
  });

  it('Should render the page correctly', () => {
    component.placeName = "Place"
    component.data = fakeData;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

});

