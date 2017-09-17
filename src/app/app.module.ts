import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { DfrService } from './dfrs/dfr.service';
import { DurationPipe } from './planets/duration.pipe';
import { EpicService } from './epics/epic.service';
import { GameProgressComponent } from './wids/game-progress/game-progress.component';
import { GameProgressResolve } from './wids/game-progress/game-progress-resolve.service';
import { HomeComponent } from './home/home.component';
import { InlineEditComponent } from './forms/inline-edit/inline-edit.component';
import { MissionService } from './missions/mission.service';
import { MyPlanetsComponent } from './planets/my-planets/my-planets.component';
import { MyPlanetsResolve } from './planets/my-planets/my-planets-resolve.service';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetsResolve } from './planets/planet-list/planets-resolve.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetService } from './planets/planet.service';
import { PlanetUpgradeChartComponent } from './wids/game-progress/planet-upgrade-chart/planet-upgrade-chart.component';
import { SatellitesComponent } from './planets/satellites/satellites.component';
import { SatellitesResolve } from './planets/satellites/satellites-resolve.service';
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
      },
      {
        path: 'satellites',
        component: SatellitesComponent,
        resolve: {
          planets: SatellitesResolve
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
  {
    path: 'progress',
    component: GameProgressComponent,
    resolve: {
      user: GameProgressResolve
    }
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DurationPipe,
    GameProgressComponent,
    HomeComponent,
    InlineEditComponent,
    MyPlanetsComponent,
    PlanetListComponent,
    PlanetsComponent,
    PlanetUpgradeChartComponent,
    SatellitesComponent,
    ShipListComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
    DfrService,
    EpicService,
    GameProgressResolve,
    MissionService,
    MyPlanetsResolve,
    PlanetService,
    PlanetsResolve,
    SatellitesResolve,
    ShipService,
    ShipsResolve,
    WidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
