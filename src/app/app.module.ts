import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WeatherService} from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TestComponent } from './test/test.component';
import { WeatherComponent } from './weather/weather.component';
import { BigWeatherComponent } from './big-weather/big-weather.component';
import {
  AvgTempPipe,
  WeatherTypePipe,
  AvgPrecipPipe,
  WeatherTypeAltPipe,
  WTypePipe,
  uvPipe,
  minTempPipe,
  maxTempPipe
} from './avg-temp.pipe';
import { defineCustomElements as ui } from '@mo/ui/loader';
ui();

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WeatherComponent,
    BigWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    WeatherTypePipe,
    WeatherTypeAltPipe,
    AvgPrecipPipe,
    AvgTempPipe,
    WTypePipe,
    maxTempPipe,
    minTempPipe,
    uvPipe
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
