import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string; 
  constructor( private http: HttpClient) { 
    this.url = 'https://restcountries.com/v3.1/region/europe'
  }

  getPaises(): Promise<any[]>{
    return firstValueFrom(this.http.get<any>(this.url));
  }
}
