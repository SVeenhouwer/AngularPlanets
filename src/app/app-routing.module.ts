import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { EnterBirthDateComponent } from './components/enter-birth-date/enter-birth-date.component';
import { MonumentListComponent } from './components/monument-list/monument-list.component';
import { CalculateMonumentsComponent } from './components/calculate-monuments/calculate-monuments.component';
import { CalculatePlanetsSimpleComponent } from './components/calculate-planets-simple/calculate-planets-simple.component';
import { FindPlanetByIdComponent } from './components/find-planet-by-id/find-planet-by-id.component';

const routes: Routes = [
  {
    path: 'planetList',
    component: PlanetListComponent
  },
  {
    path: 'enterBirthDate',
    component: EnterBirthDateComponent
  },
  {
    path: 'monumentList',
    component: MonumentListComponent
  },
  {
    path: 'calculateMonuments',
    component: CalculateMonumentsComponent
  },
  {
    path: 'calculatePlanetsSimple',
    component: CalculatePlanetsSimpleComponent
  },
  {
    path: 'findPlanetById/:id',
    component: FindPlanetByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
