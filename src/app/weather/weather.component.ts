import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent implements OnInit {

  cityName: string;
  dataWeather: Object;
  currentWeather: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }


  GetWeather() {     //param vinculado con la vista con un ngModel
    this.data.getDataWeather(this.cityName).subscribe( //nos subscribimos al observable
      data => { 
        this.dataWeather = data;
        this.currentWeather = JSON.parse(JSON.stringify(data)).list[0];
      }
    )

    console.log(this.dataWeather);
    console.log(this.currentWeather);

  };


}
