import { Component, OnInit } from '@angular/core';
import { MonumentService } from 'src/app/services/monument.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-calculate-monuments',
  templateUrl: './calculate-monuments.component.html',
  styleUrls: ['./calculate-monuments.component.css']
})
export class CalculateMonumentsComponent implements OnInit {

  constructor(private monumentService: MonumentService, private planetService: PlanetService) { } 

  private monuments;
  private planets;

  ngOnInit() {
    this.monumentService.getMonumentList().subscribe(data => {
      this.monuments = data;
    })
    this.planetService.getPlanetList().subscribe(data => {
      this.planets = data;
    })
  }

}
