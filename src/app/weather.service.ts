import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = "&key=3e83b492-f4e4-44fe-b216-21874e51aee4";

  constructor(private http: HttpClient) { }
  getLocation() {
    // return this.http.get(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist${this.apiKey}`,{withCredentials:true});()
    return this.http.get("./assets/sitelist.json");

  }
}
