import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetsResolve } from './planets/planet-list/planets-resolve.service';
import { PlanetService } from './planets/planet.service';
import { ShipsResolve } from './ships/ships-resolve.service';
import { ShipListComponent } from './ships/ship-list/ship-list.component';
import { ShipService} from './ships/ship.service';
import { MissionService } from './missions/mission.service';
import { DfrService } from './dfrs/dfr.service';
import { WidService } from './wids/wid.service';
import { CoreService } from './core/core.service';
import { EpicService } from './epics/epic.service';
import { PlanetsComponent } from './planets/planets.component';
import { TestComponent } from './test/test.component';
import { MyPlanetsComponent } from './planets/my-planets/my-planets.component';

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
      { path: 'my-planets', component: MyPlanetsComponent }
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
    PlanetService,
    PlanetsResolve,
    ShipService,
    ShipsResolve,
    WidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
