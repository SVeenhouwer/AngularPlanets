import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/model/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-planet-by-id',
  templateUrl: './find-planet-by-id.component.html',
  styleUrls: ['./find-planet-by-id.component.css']
})
export class FindPlanetByIdComponent implements OnInit {

  private planet: Planet;

  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.planetService.findPlanetById(id).subscribe( planet => {
      this.planet = planet;
    })
  }

}
