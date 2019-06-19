import { Component, OnInit } from '@angular/core';
import { CalculateBirthDate } from 'src/app/model/calculate-birth-date';
import { CalculateBirthDateService } from 'src/app/services/calculate-birth-date.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-calculate-birth-date',
  templateUrl: './show-calculate-birth-date.component.html',
  styleUrls: ['./show-calculate-birth-date.component.css']
})
export class ShowCalculateBirthDateComponent implements OnInit {

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


}
