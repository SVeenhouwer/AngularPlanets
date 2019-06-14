import { Component, OnInit } from '@angular/core';
import { MonumentService } from 'src/app/services/monument.service';

@Component({
  selector: 'app-monument-list',
  templateUrl: './monument-list.component.html',
  styleUrls: ['./monument-list.component.css']
})
export class MonumentListComponent implements OnInit {

  constructor(private monumentService: MonumentService) { } 

  private monuments;

  ngOnInit() {
    this.monumentService.getMonumentList().subscribe(data => {
      this.monuments = data;
    })
  }

}
