import { Component, OnInit } from '@angular/core';
import { CalculatedPeriodService } from 'src/app/services/calculated-period.service';
import { CalculatePeriod } from 'src/app/model/calculate-period';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-calculate-period',
  templateUrl: './edit-calculate-period.component.html',
  styleUrls: ['./edit-calculate-period.component.css']
})
export class EditCalculatePeriodComponent implements OnInit {

  private calculatePeriod: CalculatePeriod;

  constructor(
    private calculatePeriodService: CalculatedPeriodService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("Entering findCalculatePeriodById");
    const id = +this.route.snapshot.params["id"];
    
    console.log("Detected id: "+id);
    
    this.calculatePeriodService.findById(id).subscribe( calculatePeriod => {
      this.calculatePeriod = calculatePeriod;
    })
    console.log("Exiting findCalculatePeriodById");
  }

  update(): void {
    this.calculatePeriodService.update(this.calculatePeriod).subscribe(updatedCalculatePeriod => {
      console.log("Updated in Component: "+updatedCalculatePeriod.id);
    });
  }

  refreshen(): void {
    console.log("Entering findCalculatePeriodById");
    const id = +this.route.snapshot.params["id"];
    
    console.log("Detected id: "+id);
    
    this.calculatePeriodService.findById(id).subscribe( calculatePeriod => {
      this.calculatePeriod = calculatePeriod;
    })
    console.log("Exiting findCalculatePeriodById");
  }

}
