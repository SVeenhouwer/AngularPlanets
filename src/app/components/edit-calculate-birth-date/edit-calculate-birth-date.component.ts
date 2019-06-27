import { Component, OnInit } from '@angular/core';
import { CalculateBirthDateService } from 'src/app/services/calculate-birth-date.service';
import { ActivatedRoute } from '@angular/router';
import { CalculateBirthDate } from 'src/app/model/calculate-birth-date';

@Component({
  selector: 'app-edit-calculate-birth-date',
  templateUrl: './edit-calculate-birth-date.component.html',
  styleUrls: ['./edit-calculate-birth-date.component.css']
})
export class EditCalculateBirthDateComponent implements OnInit {

  private calculateBirthDate: CalculateBirthDate;

  constructor(
    private calculateBirthDateService: CalculateBirthDateService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("Entering findCalculateBirthDateById");
    const id = +this.route.snapshot.params["id"];
  
    console.log("Detected id: "+id);
  
    this.calculateBirthDateService.findById(id).subscribe( calculateBirthDate => {
      this.calculateBirthDate = calculateBirthDate;
    })
    console.log("Exiting findCalculateBirthDateById");
  }

  update(): void {
    this.calculateBirthDateService.update(this.calculateBirthDate).subscribe(updatedCalculateBirthDate => {
      console.log("Updated in Component: "+updatedCalculateBirthDate.id);
    });
    console.log("Entering findById in update function");
    const id = +this.route.snapshot.params["id"];
  
    console.log("Detected id: "+id);
  
    this.calculateBirthDateService.findById(id).subscribe( calculateBirthDate => {
      this.calculateBirthDate = calculateBirthDate;
    })
    console.log("Exiting findById in update function");
  }

}
