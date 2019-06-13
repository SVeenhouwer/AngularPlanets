import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { EnterBirthDateComponent } from './components/enter-birth-date/enter-birth-date.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    EnterBirthDateComponent
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
