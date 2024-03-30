import { Injectable } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {

  
  public la!: string
  public ln!: string


  sendlocation(lat: string, lng: string) {
   this.la = lat 
   this.ln = lng
  }

  getlocal(lat: string, lng: string){
    return  this.la, this.ln
  }

  public currentWeather!: string
  getWeather(e: string) {
    this.currentWeather = e
    this.setWeather()
  }

  setWeather(){
   return this.currentWeather
  }
}
