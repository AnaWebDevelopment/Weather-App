import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

    constructor(private http: HttpClient) { } 

    getDataWeather(cityName){
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?APPID=05bb665aac94a408281403fbfb604bd8&units=metric&q=' + cityName)
    }
    
}