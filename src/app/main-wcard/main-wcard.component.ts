import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherService } from '../weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliverService } from '../deliver.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-wcard',
  templateUrl: './main-wcard.component.html',
  styleUrl: './main-wcard.component.css'
})

export class MainWCardComponent implements OnInit {
  public Array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   //constructor()======

 
 

  selectedValue!: string;
  constructor(private weatherS: WeatherService, private actroute: ActivatedRoute, private router : Router, private deliveri : DeliverService) { }

  public WeatherStyle!: string
  public cels!: string
  public location!: string

  public labelGeo!: string
  public Img!: string

  public cf!: string
  public celsOrFaren!: number
  public celtype!: number
  private fartype!: number
  private chang: boolean = true

  public prognozArray: any
  public forcastday!: any

  // მოდალები ცვლადი ტექსტებით
  public ActiveAllTime: boolean = false
  public SeeMoreHors!: string
  public ActiveAllDay: boolean = false
  public SeeMoreDays!: string


  //ამინდის დეშბოარდის ცვლადები
  public maxTemp!: number
  public minTemp!: number
  public rainChance!: number
  public snowChance!: number
  public windeSpeed!: number
 

  //==============================================ngOnInit(): void===========================================
  ngOnInit(): void {
    this.actroute.paramMap.subscribe((name) => {
    });

    this.apiStructur('')
    this.changecels()
    this.seeMoreHors()
    this.seeMoreDays()

  }
  //==========================================================================================

  seeMoreDays() {
    this.ActiveAllDay = !this.ActiveAllDay
    switch (this.ActiveAllDay) {
      case false:
        this.ActiveAllTime = true
        this.SeeMoreDays = 'დღეების ჩახურვა'
        break
      default:
        this.SeeMoreDays = 'სხვა დღეების ნახვა'
        break
    }

  }

  seeMoreHors() {
    this.ActiveAllTime = !this.ActiveAllTime;
    switch (this.ActiveAllTime) {
      case false:
        this.ActiveAllDay = true;
        this.SeeMoreHors = 'განრიგის დახურვა';
        break;
      default:
        this.SeeMoreHors = 'სრული დღის ამინდი';
        break;
    }
  }


  days(event: any) {
    let day = event.target.value
    this.apiStructur(day)
  }
public locName = ''
  apiStructur(value: string) {
    let searchlocName = history!.state.lname  //locacia: 'tbilisi'
    let mapLocName =  `${this.deliveri.la},${this.deliveri.ln}`  //locacia: 'tbilisi'
    
    if (searchlocName) {
      this.locName = searchlocName;
  } else if (mapLocName) {
      this.locName = mapLocName;
  }
   
    let time = 'forecast' // current   =============================
    let days = value


    this.weatherS.getWeatherData(this.locName, time, days).subscribe((res) => {
      
       let currentWeather = res.current.condition.text
       this.deliveri.getWeather(currentWeather)     
 console.log('main',currentWeather)
      if (time === 'forecast') {
        const forcastprognoz = res.forecast.forecastday[0].hour
        this.prognozArray = forcastprognoz

        const daysPrognoze = res.forecast.forecastday
        this.forcastday = daysPrognoze
      }

      const horsPrognoze = res.forecast.forecastday[0].day
      this.windeSpeed = horsPrognoze.avgvis_km
      this.maxTemp = horsPrognoze.maxtemp_c
      this.minTemp = horsPrognoze.mintemp_c
      this.rainChance = horsPrognoze.daily_chance_of_rain
      this.snowChance = horsPrognoze.daily_chance_of_snow

      let Data = res
      let Ldata = Data.location
      let Current = Data.current
      let Condition = Current.condition
      let label = `${Ldata.country}/${Ldata.name}/${Ldata.localtime}`

      this.WeatherStyle = Condition.text
      this.location = Ldata.name
      this.labelGeo = label
      this.Img = Condition.icon
      this.celtype = Current.temp_c
      this.fartype = Current.temp_f
    },
    (error) => {
      Swal.fire({
        title: "აირჩიეთ ქალაქი",
        text: "ამინდების სანახავად ჯერ უნდა შეიყვანოთ სასურველი ქალაქი",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Map-ის გამოყენაბა"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/gmap'])
        }
      });
        // თუ გამოვიდა შეცდომა, არ გააგზავნოთ /home როუტზე
        this.router.navigate(['/']); // როგორცააცდარად დაბრუნდება ახლანდელი გვერდზე
    })
  }

  changecels() {
    switch (this.chang) {
      case false:
        this.celsOrFaren = this.celtype
        this.cf = 'C'
        break
      default:
        this.celsOrFaren = this.fartype
        this.cf = 'F'
        break
    }
    this.chang = !this.chang
  }

}
interface City {
  name: string,
  code: string
}

export class DropdownDemo {



}