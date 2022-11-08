import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceMortyService } from 'src/app/service/service-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  arrPj: any[] 
  idP: any; 
  constructor(private activateRoute: ActivatedRoute, private serviceRick: ServiceMortyService, private route: Router) {
    this.arrPj = []

  }

 
  
  
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(async params => {
      this.idP = params.get('idPersonaje')
      this.arrPj.push(await this.serviceRick.getById(this.idP))

  })

  }
}
