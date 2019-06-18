import { Component, OnInit } from '@angular/core';
import { CalculateBirthDateService } from 'src/app/services/calculate-birth-date.service';
import { CalculateBirthDate } from 'src/app/model/calculate-birth-date';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-enter-birth-date',
  templateUrl: './enter-birth-date.component.html',
  styleUrls: ['./enter-birth-date.component.css']
})
export class EnterBirthDateComponent implements OnInit {

  putInDate: string;
  listedDate;
  calculatedEarthDays: Number;
  id: Number;
  private foundDate;
  private enteredCalculateBirthDate;
  private calculateBirthDate;

  enteredYears;
  enteredMonths;
  enteredDays;

  private planets;

  constructor(private calculateBirthDateService: CalculateBirthDateService,
              private planetService: PlanetService,
              private route: ActivatedRoute
              ) { }
  
  ngOnInit() {
    this.planetService.getPlanetList().subscribe(data => {
      this.planets = data;
    })

    this.calculateBirthDateService.findById(1).subscribe( calculateBirthDate => {
      console.log("In findById function in initiation");
      this.calculateBirthDate = calculateBirthDate;
      console.log("Exiting findById function in initiation");
    })
  }

  update(): void {
    console.log("In update function CalculateBirthDate");
    this.calculateBirthDateService.findById(1).subscribe(calculateBirthDate => {
      console.log("In findById function in update function");
      this.enteredCalculateBirthDate = calculateBirthDate;
      console.log("Exciting findById function in update function: "+this.enteredCalculateBirthDate.id);
    })
    
    // this.calculateBirthDateService.getCalculateBirthDateList().subscribe( calculateBirthDate => {
    //   console.log("In list function in update function");
    //   this.enteredCalculateBirthDate = calculateBirthDate;
    //   console.log("Exciting list function in update function :"+this.enteredCalculateBirthDate);
    // })
    
    this.enteredCalculateBirthDate.enteredDateString = this.putInDate;
    this.calculateBirthDateService.update(this.enteredCalculateBirthDate).subscribe(updatedCalculateBirthDate => {
      console.log("Updated CalculateBirthDate :"+updatedCalculateBirthDate);
    });
  }

  setDate() {
    console.log("In enterBirthDateComponent: setDate()")
    this.listedDate = this.putInDate;
  }

  sendBirthDate() {
    console.log("in enterBirthDateCompontent: sendBirthDate() of value: "+this.putInDate)
    this.enteredYears = this.putInDate.substring(0,4);
    this.enteredMonths = this.putInDate.substring(5,7);
    this.enteredDays = this.putInDate.substring(8,10);
    this.calculateBirthDateService.sendBirthDate(1, this.putInDate).subscribe();
    this.calculateBirthDateService.getCalculateBirthDateList().subscribe( calculateBirthDate => {
      this.foundDate = calculateBirthDate;
    })
  }

}
