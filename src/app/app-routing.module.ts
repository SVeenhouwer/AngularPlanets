import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { EnterBirthDateComponent } from './components/enter-birth-date/enter-birth-date.component';

const routes: Routes = [
  {
    path: 'planetList',
    component: PlanetListComponent
  },
  {
    path: 'enterBirthDate',
    component: EnterBirthDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
