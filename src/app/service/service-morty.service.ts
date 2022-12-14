import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Character } from './models/character.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceMortyService {

  url: string; 
  arrpj: any;
  constructor(private htpp: HttpClient, ) { 
    this.arrpj = {};
    
    this.url = "https://rickandmortyapi.com/api/character";
  }


  getCharacter(pPage = 1): Promise <any>{
    return firstValueFrom(this.htpp.get<any>(`${this.url}?page=${pPage}`))
    
  }

  getByStatus(pStatus?: string , pPage: number = 1 ): Promise<any>{
    if (pStatus === 'status' || pStatus === '') {
      return this.getCharacter(pPage)
    } else {
      return firstValueFrom(this.htpp.get<any>(`${this.url}/?name=rick&status=${pStatus}&page=${pPage}`))
    }
    

  }

  getById(idCharacter: number): Promise<any>{
    return firstValueFrom(this.htpp.get<any>(`${this.url}/${idCharacter}`))
  }

}
