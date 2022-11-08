import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/service/models/character.model';


import { ServiceMortyService } from 'src/app/service/service-morty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements AfterViewInit {
  //
  arrPj: any[] = [];
  pjR: any[] = [];
  currentPage: number;
  numPage: number; 
  status: string = '';
  id: number | null = null ; 

  constructor(private pjService: ServiceMortyService,
              private actived:ActivatedRoute, private router: Router) {
    this.pjR = [];
    this.currentPage = 1;
    this.numPage = 0;
   }
  
  async ngAfterViewInit() {
    await this.pjService.getCharacter().then(response => {
      this.arrPj = response['results']
      this.numPage = response['info']['pages']
     });
     
  }
  ngOnInit(): void {

  }
  
  

async onStatus($event?: any, ){
  this.status = $event.target.value
  if (this.currentPage <= this.numPage ) {
    this.currentPage = 1 
    if (this.status === $event.target.value) {
      const response =  await this.pjService.getByStatus(this.status ,this.currentPage)
      this.arrPj = response['results']
      this.numPage = response['info']['pages']
  }
  }
}
async changePage(siguiente: boolean) {
    if (siguiente) {
      this.currentPage++;
     // console.log( this.currentPage+ '/'+this.numPage);
    }else{
      this.currentPage--;
    }
  const response =  await this.pjService.getByStatus(this.status,this.currentPage)
  this.arrPj = response['results']
}
  
  viewDetail(pId: number): void {
    console.log(pId);
    this.router.navigate(['/web/', pId]);
  }

}




// if (siguiente) {
//   this.currentPage--;
//   console.log(this.pjR);
// }else{
//   this.currentPage++;
//   console.log(this.pjR);
// }

// const response =  await this.pjService.getByStatus('',this.currentPage)
// this.arrPj = response['results']
// this.arrPj = this.pjR
// return this.currentPage
  
    //console.log(this.arrPj['results']);
  

  // ngOnInit() {
    // this.pjR.p
    
  // }


  // pjStatus(pjSts: any){
  //   const findSts = []
  //   Object.keys(pjSts).map(key => {
  //     const keyA = key
  //     const value = pjSts[0][key]
  //     findSts.push(`${keyA}:${value}`)
  //     console.log(findSts);

      
  //   });

    
  // }