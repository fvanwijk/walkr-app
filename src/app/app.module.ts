import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetsResolve } from './planets/planets-resolve.service';
import { PlanetService } from './planets/planet.service';
import { ShipsResolve } from './ships/ships-resolve.service';
import { ShipListComponent } from './ships/ship-list/ship-list.component';
import { ShipService} from './ships/ship.service';

const appRoutes: Routes = [
  {
    path: 'planets',
    component: PlanetListComponent,
    resolve: {
      planets: PlanetsResolve
    }
  },
  {
    path: 'ships',
    component: ShipListComponent,
    resolve: {
      ships: ShipsResolve
    }
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetListComponent,
    ShipListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, PlanetService, PlanetsResolve, ShipService, ShipsResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
