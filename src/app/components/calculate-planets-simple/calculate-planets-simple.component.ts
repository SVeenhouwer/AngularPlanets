import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-calculate-planets-simple',
  templateUrl: './calculate-planets-simple.component.html',
  styleUrls: ['./calculate-planets-simple.component.css']
})
export class CalculatePlanetsSimpleComponent implements OnInit {
 
  constructor(private planetService: PlanetService) { }

  private planets;
  private enteredPeriodYears;
  private enteredPeriodDays;

  private calculatedPlanetYears;
  private calculatedPlanetDays;
  
  ngOnInit() {
    this.planetService.getPlanetList().subscribe(data => {
      this.planets = data;
    })
  }

  calculatePeriod() {
    console.log("In calculatePeriod method of calculate planets simple component");
    this.enteredPeriodDays = this.enteredPeriodYears*365.26;
    console.log("Exiting calculatePeriod method in calculate planets simple component");
  }

  private enteredYearsMercury;
  private calculatedDaysMercury;
  private calculatedMercuryYears;
  private calculatedMercuryYearsDays;

  calculateYearsMercury() {
    console.log("In calculateYearsMercury function");
    this.calculatedDaysMercury = this.enteredYearsMercury*this.planets[2].orbitalPeriodSolar;
    this.calculatedMercuryYearsDays = this.calculatedDaysMercury/this.planets[0].orbitalPeriodAxis;
    this.calculatedMercuryYears = this.calculatedDaysMercury/this.planets[0].orbitalPeriodSolar;
    console.log("Exiting calculateYearsMercury function");
  }

  private enteredDaysMercury;
  private calculatedMercuryDays;
  private calculatedMercuryDaysYears;

  calculateDaysMercury() {
    console.log("In calculateDaysMercury function");
    this.calculatedMercuryDays = this.enteredDaysMercury/this.planets[0].orbitalPeriodAxis;
    this.calculatedMercuryDaysYears = this.enteredDaysMercury/this.planets[0].orbitalPeriodSolar;
    console.log("Exiting calculateDaysMercury function");
  }

  private enteredYearsVenus;
  private calculatedDaysVenus;
  private calculatedVenusYears;
  private calculatedVenusYearsDays;

  calculateYearsVenus() {
    console.log("In calculateYearsVenus fuction");
    this.calculatedDaysVenus = this.enteredYearsVenus*this.planets[2].orbitalPeriodSolar;
    this.calculatedVenusYearsDays = this.calculatedDaysVenus/this.planets[1].orbitalPeriodAxis;
    this.calculatedVenusYears = this.calculatedDaysVenus/this.planets[1].orbitalPeriodSolar;
    console.log("Exiting calculateYearsVenus function");
  }

  private enteredDaysVenus;
  private calculatedVenusDays;
  private calculatedVenusDaysYears;

  calculateDaysVenus() {
    console.log("In calculateDaysVenus function");
    this.calculatedVenusDays = this.enteredDaysVenus/this.planets[1].orbitalPeriodAxis;
    this.calculatedVenusDaysYears = this.enteredDaysVenus/this.planets[1].orbitalPeriodSolar;
    console.log("Exiting calculateDaysVenus function");
  }

  private enteredYearsEarth;
  private calculatedDaysEarth;

  calculateYearsEarth() {
    console.log("In calculateYearsEarth function");
    this.calculatedDaysEarth = this.enteredYearsEarth*this.planets[2].orbitalPeriodSolar;
    console.log("Exiting calculateYearsEarth function");
  }

  private enteredDaysEarth;
  private calculatedEarthYears;

  calculateDaysEarth() {
    console.log("In calculateDaysEarth function");
    this.calculatedEarthYears = this.enteredDaysEarth/this.planets[2].orbitalPeriodSolar;
    console.log("Exiting calculateDaysEarth function");
  }

  private enteredYearsMars;
  private calculatedDaysMars;
  private calculatedMarsYears;
  private calculatedMarsYearsDays;

  calculateYearsMars() {
    console.log("In calculateYearsMars fuction");
    this.calculatedDaysMars = this.enteredYearsMars*this.planets[2].orbitalPeriodSolar;
    this.calculatedMarsYearsDays = this.calculatedDaysMars/this.planets[3].orbitalPeriodAxis;
    this.calculatedMarsYears = this.calculatedDaysMars/this.planets[3].orbitalPeriodSolar;
    console.log("Exiting calculateYearsMars function");
  }

  private enteredDaysMars;
  private calculatedMarsDays;
  private calculatedMarsDaysYears;

  calculateDaysMars() {
    console.log("In calculateDaysMars function");
    this.calculatedMarsDays = this.enteredDaysMars/this.planets[3].orbitalPeriodAxis;
    this.calculatedMarsDaysYears = this.enteredDaysMars/this.planets[3].orbitalPeriodSolar;
    console.log("Exiting calculateDaysMars function");
  }

  private enteredYearsJupiter;
  private calculatedDaysJupiter;
  private calculatedJupiterYears;
  private calculatedJupiterYearsDays;

  calculateYearsJupiter() {
    console.log("In calculateYearsJupiter fuction");
    this.calculatedDaysJupiter = this.enteredYearsJupiter*this.planets[2].orbitalPeriodSolar;
    this.calculatedJupiterYearsDays = this.calculatedDaysJupiter/this.planets[4].orbitalPeriodAxis;
    this.calculatedJupiterYears = this.calculatedDaysJupiter/this.planets[4].orbitalPeriodSolar;
    console.log("Exiting calculateYearsJupiter function");
  }

  private enteredDaysJupiter;
  private calculatedJupiterDays;
  private calculatedJupiterDaysYears;

  calculateDaysJupiter() {
    console.log("In calculateDaysJupiter function");
    this.calculatedJupiterDays = this.enteredDaysJupiter/this.planets[4].orbitalPeriodAxis;
    this.calculatedJupiterDaysYears = this.enteredDaysJupiter/this.planets[4].orbitalPeriodSolar;
    console.log("Exiting calculateDaysJupiter function");
  }

  private enteredYearsSaturn;
  private calculatedDaysSaturn;
  private calculatedSaturnYears;
  private calculatedSaturnYearsDays;

  calculateYearsSaturn() {
    console.log("In calculateYearsSaturn fuction");
    this.calculatedDaysSaturn = this.enteredYearsSaturn*this.planets[2].orbitalPeriodSolar;
    this.calculatedSaturnYearsDays = this.calculatedDaysSaturn/this.planets[5].orbitalPeriodAxis;
    this.calculatedSaturnYears = this.calculatedDaysSaturn/this.planets[5].orbitalPeriodSolar;
    console.log("Exiting calculateYearsSaturn function");
  }

  private enteredDaysSaturn;
  private calculatedSaturnDays;
  private calculatedSaturnDaysYears;

  calculateDaysSaturn() {
    console.log("In calculateDaysSaturn function");
    this.calculatedSaturnDays = this.enteredDaysSaturn/this.planets[5].orbitalPeriodAxis;
    this.calculatedSaturnDaysYears = this.enteredDaysSaturn/this.planets[5].orbitalPeriodSolar;
    console.log("Exiting calculateDaysSaturn function");
  }

  private enteredYearsUranus;
  private calculatedDaysUranus;
  private calculatedUranusYears;
  private calculatedUranusYearsDays;

  calculateYearsUranus() {
    console.log("In calculateYearsUranus fuction");
    this.calculatedDaysUranus = this.enteredYearsUranus*this.planets[2].orbitalPeriodSolar;
    this.calculatedUranusYearsDays = this.calculatedDaysUranus/this.planets[6].orbitalPeriodAxis;
    this.calculatedUranusYears = this.calculatedDaysUranus/this.planets[6].orbitalPeriodSolar;
    console.log("Exiting calculateYearsSaturn function");
  }

  private enteredDaysUranus;
  private calculatedUranusDays;
  private calculatedUranusDaysYears;

  calculateDaysUranus() {
    console.log("In calculateDaysUranus function");
    this.calculatedUranusDays = this.enteredDaysUranus/this.planets[6].orbitalPeriodAxis;
    this.calculatedUranusDaysYears = this.enteredDaysUranus/this.planets[6].orbitalPeriodSolar;
    console.log("Exiting calculateDaysUranus function");
  }

  private enteredYearsNeptune;
  private calculatedDaysNeptune;
  private calculatedNeptuneYears;
  private calculatedNeptuneYearsDays;

  calculateYearsNeptune() {
    console.log("In calculateYearsNeptune fuction");
    this.calculatedDaysNeptune = this.enteredYearsNeptune*this.planets[2].orbitalPeriodSolar;
    this.calculatedNeptuneYearsDays = this.calculatedDaysNeptune/this.planets[7].orbitalPeriodAxis;
    this.calculatedNeptuneYears = this.calculatedDaysNeptune/this.planets[7].orbitalPeriodSolar;
    console.log("Exiting calculateYearsNeptune function");
  }

  private enteredDaysNeptune;
  private calculatedNeptuneDays;
  private calculatedNeptuneDaysYears;

  calculateDaysNeptune() {
    console.log("In calculateDaysNeptune function");
    this.calculatedNeptuneDays = this.enteredDaysNeptune/this.planets[7].orbitalPeriodAxis;
    this.calculatedNeptuneDaysYears = this.enteredDaysNeptune/this.planets[7].orbitalPeriodSolar;
    console.log("Exiting calculateDaysNeptune function");
  }
}
