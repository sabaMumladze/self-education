import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { DeliverService } from './deliver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'weather';
  images!: string;
  cWeather: string = 'Wind'

  constructor(private deliver: DeliverService) { }

  ngOnInit(): void {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      document.body.style.backgroundImage = "url('./../../assets/background/aft.jpg')";
    } else if (hour >= 12 && hour < 18) {
      document.body.style.backgroundImage = "url('./../../assets/background/aft.jpg')";
    } else if (hour >= 18 && hour < 24) {
      document.body.style.backgroundImage = "url('./../../assets/background/mid.jpg')";
    } else {
      document.body.style.backgroundImage = "url('./../../assets/background/night.jpg')";
    }
  }


 
  }




