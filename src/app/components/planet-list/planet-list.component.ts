import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/model/planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  constructor(private planetService: PlanetService) { }

  private planets;

  ngOnInit() {
    this.planetService.getPlanetList().subscribe(data => {
      this.planets = data;
    })
  }

}
