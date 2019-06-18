import { Component, OnInit } from '@angular/core';
import { MonumentService } from 'src/app/services/monument.service';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/model/planet';
import { Monument } from 'src/app/model/monument';

@Component({
  selector: 'app-calculate-monuments',
  templateUrl: './calculate-monuments.component.html',
  styleUrls: ['./calculate-monuments.component.css']
})
export class CalculateMonumentsComponent implements OnInit {

  constructor(private monumentService: MonumentService, private planetService: PlanetService) { } 

  private monuments;
  private planets;
  private selectedMonuments: Monument[] = new Array(8);
  private selectedPlanets: Planet[] = new Array(8);
  private calculationOutput: String = "";

  ngOnInit() {
    this.monumentService.getMonumentList().subscribe(data => {
      this.monuments = data;
    })
    this.planetService.getPlanetList().subscribe(data => {
      this.planets = data;
    })
  }

  totalPlanets;
  totalMonuments;
  
  calculateMonuments() {
    this.calculationOutput = "";
    this.totalPlanets = 0;
    this.totalMonuments = 0;
    var indexOut = 0;
    var i;
    for (i=0; i<this.monuments.length; i++) {
      if (this.monuments[i].selected) {
        this.calculationOutput += "<br>";
        this.selectedMonuments[i] = this.monuments[i];
        console.log("Added to selectedMonuments array: "+this.selectedMonuments[i].name);
        this.totalMonuments++;
        var j;
        for (j=0; j<this.planets.length; j++) {
          if (this.planets[j].selected) {
            this.selectedPlanets[j] = this.planets[j];
            this.totalPlanets++;
            console.log("Added to selectedPlanets array: "+this.selectedPlanets[j].name);
            console.log("Monument: "+this.monuments[i].name+" & Planet: "+this.planets[j].name);
            this.calculationOutput += "Calculated age of "+this.monuments[i].name+" in periods of the planet "+this.planets[j].name
              +" is "+this.monuments[i].ageDays/this.planets[j].orbitalPeriodAxis+" days and "
              +this.monuments[i].ageDays/this.planets[j].orbitalPeriodSolar+" years."+"<br>";
            indexOut++;
          }
        }
      } 
    }
    
  }

}
