import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'avgTemp'})
export class AvgTempPipe implements PipeTransform {
  transform(data: any): string {
    let tempAvg = 0;
    for(let i =0; i < data.length; i++){
      let tempIndv = 0;
      tempIndv = parseInt(data[i].T);
      tempAvg = tempAvg + tempIndv;
    }
    return (tempAvg/data.length).toFixed(0) + "C";
  }
}

@Pipe({name: 'avgPrecip'})
export class AvgPrecipPipe implements PipeTransform {
  transform(data: any): string {
    let ppAvg = 0;
    for(let i =0; i < data.length; i++){
      let ppIndv = 0;
      ppIndv = parseInt(data[i].Pp);
      ppAvg = ppAvg + ppIndv;
    }
    let ppRound = Math.round((ppAvg/data.length)/5)*5;
    if(ppRound >= 10){
      ppRound = Math.round(ppRound/10)*10;
    }
    return (ppRound + "%");
  }
}

@Pipe({name: 'weatherType'})
export class WeatherTypePipe implements PipeTransform {
  transform(data: any): any {
    let weatherDaily = parseInt(data[0].W);
    if (weatherDaily===1|| weatherDaily===0) {
      return "../assets/icons/Sun.png"
    } else if(weatherDaily===2||weatherDaily===3||weatherDaily===7||weatherDaily===8){
      return "../assets/icons/Cloud.png"
    } else if(weatherDaily>=4&&weatherDaily<=6){
      return "../assets/icons/Fog.png"
    } else if(weatherDaily>=9&&weatherDaily<=15){
      return "../assets/icons/Rain.png"
    } else if(weatherDaily>=16&&weatherDaily<=27){
      return "../assets/icons/Snow.png"
    } else if(weatherDaily>=28&&weatherDaily<=30){
      return "../assets/icons/Thunder.png"
    } else{
      console.log("Something went wrong");
      console.log(weatherDaily);
    }
  }
}

@Pipe({name: 'weatherTypeAlt'})
export class WeatherTypeAltPipe implements PipeTransform {
  transform(data: any): any {
    let weatherDaily = parseInt(data[0].W);
    if (weatherDaily===1|| weatherDaily===0) {
      return "Sunny icon"
    } else if(weatherDaily===2||weatherDaily===3||weatherDaily===7||weatherDaily===8){
      return "Cloudy icon"
    } else if(weatherDaily>=4&&weatherDaily<=6){
      return "Foggy icon"
    } else if(weatherDaily>=9&&weatherDaily<=15){
      return "Raining icon"
    } else if(weatherDaily>=16&&weatherDaily<=27){
      return "Snowing icon"
    } else if(weatherDaily>=28&&weatherDaily<=30){
      return "Thunder icon"
    } else{
      console.log("Something went wrong");
      console.log(weatherDaily);
    }
  }
}

@Pipe({name: 'wType'})
export class WTypePipe implements PipeTransform {
  transform(data: any): any {
    let weather = data[0].W
    const weatherType = ["Clear night", "Sunny day", "Partly cloudy (night)", "Partly cloudy (day)", "Not used", "Mist", "Fog", "Cloudy", "Overcast",
      "Light rain shower (night)", "Light rain shower (day)", "Drizzle", "Light rain", "Heavy rain shower (night)", "Heavy rain shower (day)",
      "Heavy rain", "Sleet shower (night)", "Sleet shower (day)", "Sleet", "Hail shower (night)", "Hail shower (day)", "Hail", "Light snow shower (night)",
      "Light snow shower (day)", "Light snow", "Heavy snow shower (night)", "Heavy snow shower (day)", "Heavy snow", "Thunder shower (night)", "Thunder shower (day)", "Thunder"
    ];
    return weatherType[weather];
  }
}

@Pipe({name: 'uv'})
export class uvPipe implements PipeTransform {
  transform(data: any): any {
    const uv = data[0].U;
    if (uv <= 2) {
      return "L";
    } else if (uv <= 5) {
      return "M";
    } else if (uv <= 7) {
      return "H";
    } else if (uv <= 10) {
      return "VH";
    } else if (uv >= 11) {
      return "E";
    } else {
      console.log("Something went wrong");
    }
  }
}


@Pipe({name: 'minTemp'})
export class minTempPipe implements PipeTransform {
  transform(data: any): any {
    const tempArr = [];
    for (let j = 0; j < data.length; j++) {
      tempArr.push(data[j].T);
    }
    return Math.min(...tempArr);
  }
}

  @Pipe({name: 'maxTemp'})
  export class maxTempPipe implements PipeTransform {
    transform(data: any): any {
      const tempArr = [];
      for (let j = 0; j < data.length; j++) {
        tempArr.push(data[j].T);
      }
      return Math.max(...tempArr);
    }
  }
