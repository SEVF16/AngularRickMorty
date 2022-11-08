import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any;
  constructor(private paisesService: ServiceService) { 
    this.paises = []
  }

  async ngOnInit() {
    this.paises =  await this.paisesService.getPaises();
    console.log(this.paises);
  }

  
}
