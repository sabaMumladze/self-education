import { NgModule,} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainWCardComponent } from './main-wcard/main-wcard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//primNG =====$$$====
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { GoogleMapsModule } from '@angular/google-maps';
import { GMapComponent } from './gmap/gmap.component';


@NgModule({
  declarations: [
    AppComponent,
    MainWCardComponent,
    TopbarComponent,
    SearchComponent,
    GMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    GoogleMapsModule,
    ButtonModule,
    DropdownModule,
  

  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
