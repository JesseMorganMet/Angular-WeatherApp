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

  it('should create', () => {
    component.data = fakeData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Should img path injected', () => {
    component.data = fakeData;
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].children[1].src).toBe("http://localhost/assets/icons/Cloud.png");
  });
  it('Should img alt name injected', () => {
    component.data = fakeData;
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].children[1].alt).toBe("Cloudy icon");
  });
});

// const fakeName = place1
// const fakeData = {
//   "Rep": [{
//       "T": "17",
//       "W": "7",
//       "U": "1"
//     },
//     {
//       "T": "18",
//       "W": "15",
//       "U": "2"
//     },
//     {
//       "T": "20",
//       "W": "12",
//       "U": "4"
//     },
//     {
//       "T": "23",
//       "W": "30",
//       "U": "3",
//     },
//     {
//       "T": "21",
//       "W": "7",
//       "U": "1"
//     },
//     {
//       "T": "20",
//       "W": "7",
//       "U": "0"
//     }
//   ]
// };
