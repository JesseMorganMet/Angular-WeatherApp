import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

    it('should be created', () => {
      expect(service).toBeTruthy();
  });
});
