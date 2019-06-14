import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { EnterBirthDateComponent } from './components/enter-birth-date/enter-birth-date.component';
import { MonumentListComponent } from './components/monument-list/monument-list.component';
import { CalculateMonumentsComponent } from './components/calculate-monuments/calculate-monuments.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
