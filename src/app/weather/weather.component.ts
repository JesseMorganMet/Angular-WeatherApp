import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() data;
  @Input() i: number
  days
  temp
  percip
  wType
  img
  alt

  constructor() {
  }
  ngOnInit(): void {
    this.days = this.data.SiteRep.DV.Location.Period;
    this.avgTemp(this.days);
    this.avgPercip(this.days);
    this.weatherType(this.days);
  }

  avgTemp(days){
    const dayData = this.days[this.i].Rep; //hard coded for now
    let tempAvg = 0;
    for(let i =0; i < dayData.length; i++){
      let tempIndv = 0;
      tempIndv = parseInt(dayData[i].T);
      tempAvg = tempAvg + tempIndv;
    }
    this.temp = (tempAvg/dayData.length).toFixed(0) + "C";
    // console.log(temp)
  }

  avgPercip(days){
    const dayData = this.days[this.i].Rep; //hard coded for now
    let ppAvg = 0;
    for(let i =0; i < dayData.length; i++){
      let ppIndv = 0;
      ppIndv = parseInt(dayData[i].Pp);
      ppAvg = ppAvg + ppIndv;
    }
    let ppRound = Math.round((ppAvg/dayData.length)/5)*5;
    if(ppRound >= 10){
      ppRound = Math.round(ppRound/10)*10;
    }
    this.percip = (ppRound + "%");
    // console.log(percip)
  }
  weatherType(days){
    const dayData = this.days[this.i].Rep;
    let weatherDaily = parseInt(dayData[0].W);
    if (weatherDaily===1|| weatherDaily===0) {
      this.img = '../assets/icons/Sun.png';
      this.alt = 'Sunny Icon';
    } else if(weatherDaily===2||weatherDaily===3||weatherDaily===7||weatherDaily===8){
      this.img = '../assets/icons/Cloud.png';
      this.alt = 'Cloudy Icon';
    } else if(weatherDaily>=4&&weatherDaily<=6){
      this.img = '../assets/icons/Fog.png';
      this.alt = 'Foggy Icon';
    } else if(weatherDaily>=9&&weatherDaily<=15){
      this.img = '../assets/icons/Rain.png';
      this.alt = 'Raining Icon';
    } else if(weatherDaily>=16&&weatherDaily<=27){
      this.img = '../assets/icons/Snow.png';
      this.alt = 'Snowing Icon';
    } else if(weatherDaily>=28&&weatherDaily<=30){
      this.img = '../assets/icons/Thunder.png';
      this.alt = 'Thunder Icon';
    } else{
      console.log("Something went wrong");
      console.log(weatherDaily);
    }
  }
}
