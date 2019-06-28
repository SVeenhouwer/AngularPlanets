import { Component, OnInit } from '@angular/core';
import { MonumentService } from 'src/app/services/monument.service';
import { Monument } from 'src/app/model/monument';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-monument-by-id',
  templateUrl: './find-monument-by-id.component.html',
  styleUrls: ['./find-monument-by-id.component.css']
})
export class FindMonumentByIdComponent implements OnInit {

  private monument: Monument;

  constructor(
    private monumentService: MonumentService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("Entering findMonumentById");
    const id = +this.route.snapshot.params["id"];
  
    console.log("Detected id: "+id);
  
    this.monumentService.findMonumentById(id).subscribe( monument => {
      this.monument = monument;
    })
    console.log("Exiting findMonumentById");
  }

}
