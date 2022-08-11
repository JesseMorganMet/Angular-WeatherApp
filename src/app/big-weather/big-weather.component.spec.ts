import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWeatherComponent } from './big-weather.component';

describe('BigWeatherComponent', () => {
  let component: BigWeatherComponent;
  let fixture: ComponentFixture<BigWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
