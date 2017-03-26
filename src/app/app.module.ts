import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { CoreService } from './core/core.service';
import { DfrService } from './dfrs/dfr.service';
import { EpicService } from './epics/epic.service';
import { HomeComponent } from './home/home.component';
import { MissionService } from './missions/mission.service';
import { MyPlanetsComponent } from './planets/my-planets/my-planets.component';
import { MyPlanetsResolve } from './planets/my-planets/my-planets-resolve.service';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetsResolve } from './planets/planet-list/planets-resolve.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetService } from './planets/planet.service';
import { ShipListComponent } from './ships/ship-list/ship-list.component';
import { ShipService} from './ships/ship.service';
import { ShipsResolve } from './ships/ships-resolve.service';
import { WidService } from './wids/wid.service';

const appRoutes: Routes = [
  {
    path: 'planets',
    component: PlanetsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: PlanetListComponent,
        resolve: {
          planets: PlanetsResolve
        }
      },
      {
        path: 'my-planets',
        component: MyPlanetsComponent,
        resolve: {
          discoveries: MyPlanetsResolve
        }
      }
    ]
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
    MyPlanetsComponent,
    PlanetListComponent,
    PlanetsComponent,
    ShipListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
    CoreService,
    DfrService,
    EpicService,
    MissionService,
    MyPlanetsResolve,
    PlanetService,
    PlanetsResolve,
    ShipService,
    ShipsResolve,
    WidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
