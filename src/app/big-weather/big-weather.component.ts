import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-big-weather',
  templateUrl: './big-weather.component.html',
  styleUrls: ['./big-weather.component.scss']
})
export class BigWeatherComponent implements OnInit {

  @Input() somethingElse;
  @Input() data;
  tempMin
  tempMax
  uvType: string
  wType
  img
  alt

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
    this.temperatureArray(this.data)
    this.uvData(this.data)
    this.weatherType(this.data)
    this.weatherTypeImg(this.data)
  }

  temperatureArray(today){
    const tempArr = [];
    for(let j =0;j<today.Rep.length; j++) {
      tempArr.push(today.Rep[j].T);
    }
    this.tempMin = Math.min(...tempArr);
    this.tempMax = Math.max(...tempArr);
  }

  uvData(today){
    const uv = today.Rep[0].U;
    if (uv<=2) {
      this.uvType = "L";
    } else if(uv<=5){
      this.uvType = "M";
    } else if(uv<=7){
      this.uvType = "H";
    } else if(uv<=10){
      this.uvType = "VH";
    } else if(uv>=11){
      this.uvType = "E";
    } else{
      console.log("Something went wrong");
    }
  }

  weatherType(today){
    let weather = today.Rep[0].W
    const weatherType = ["Clear night","Sunny day","Partly cloudy (night)","Partly cloudy (day)","Not used","Mist","Fog","Cloudy","Overcast",
      "Light rain shower (night)","Light rain shower (day)","Drizzle","Light rain","Heavy rain shower (night)","Heavy rain shower (day)",
      "Heavy rain","Sleet shower (night)","Sleet shower (day)","Sleet","Hail shower (night)","Hail shower (day)","Hail","Light snow shower (night)",
      "Light snow shower (day)","Light snow","Heavy snow shower (night)","Heavy snow shower (day)","Heavy snow","Thunder shower (night)","Thunder shower (day)","Thunder"
    ];
    this.wType = weatherType[weather];
  }

  weatherTypeImg(today){
    const dayData = today.Rep[0].W;
    let weatherDaily = parseInt(dayData);
    if (weatherDaily===1|| weatherDaily===0) {
      this.img = '../assets/icons/Sun.png';
      this.alt = 'Sunny Icon';
    } else if(weatherDaily===2||weatherDaily===3||weatherDaily===7||weatherDaily===8){
      this.img = '../assets/icons/Cloud.png';
      this.alt = 'Cloudy Icon';
    } else if(weatherDaily>4&&weatherDaily<6){
      this.img = '../assets/icons/Fog.png';
      this.alt = 'Foggy Icon';
    } else if(weatherDaily>9&&weatherDaily<15){
      this.img = '../assets/icons/Rain.png';
      this.alt = 'Raining Icon';
    } else if(weatherDaily>16&&weatherDaily<27){
      this.img = '../assets/icons/Snow.png';
      this.alt = 'Snowing Icon';
    } else if(weatherDaily>28&&weatherDaily<30){
      this.img = '../assets/icons/Thunder.png';
      this.alt = 'Thunder Icon';
    } else{
      console.log("Something went wrong");
      console.log(weatherDaily);
    }
  }

}
