import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetService } from './planets/planet.service';

const appRoutes: Routes = [
  { path: 'planets', component: PlanetListComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
