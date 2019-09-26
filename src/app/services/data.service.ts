import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getCars(): any[] {
    return JSON.parse(localStorage.getItem('cars'));
  }

  public getCarMakers(): any[] {
    return JSON.parse(localStorage.getItem('carMakers'));
  }
}
