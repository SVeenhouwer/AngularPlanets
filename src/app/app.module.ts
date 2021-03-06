import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { EnterBirthDateComponent } from './components/enter-birth-date/enter-birth-date.component';
import { MonumentListComponent } from './components/monument-list/monument-list.component';
import { CalculateMonumentsComponent } from './components/calculate-monuments/calculate-monuments.component';
import { CalculatePlanetsSimpleComponent } from './components/calculate-planets-simple/calculate-planets-simple.component';
import { FindPlanetByIdComponent } from './components/find-planet-by-id/find-planet-by-id.component';
import { EditCalculateBirthDateComponent } from './components/edit-calculate-birth-date/edit-calculate-birth-date.component';
import { ShowCalculateBirthDateComponent } from './components/show-calculate-birth-date/show-calculate-birth-date.component';
import { FindMonumentByIdComponent } from './components/find-monument-by-id/find-monument-by-id.component';
import { EditCalculatePeriodComponent } from './components/edit-calculate-period/edit-calculate-period.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    EnterBirthDateComponent,
    MonumentListComponent,
    CalculateMonumentsComponent,
    CalculatePlanetsSimpleComponent,
    FindPlanetByIdComponent,
    EditCalculateBirthDateComponent,
    ShowCalculateBirthDateComponent,
    FindMonumentByIdComponent,
    EditCalculatePeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
