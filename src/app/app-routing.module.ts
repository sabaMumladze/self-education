import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWCardComponent } from './main-wcard/main-wcard.component';
import { SearchComponent } from './search/search.component';
import { GMapComponent } from './gmap/gmap.component';

const routes: Routes = [
  {path: 'home', component: MainWCardComponent},
  {path: 'search' , component: SearchComponent},
  {path: 'gmap' , component: GMapComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
