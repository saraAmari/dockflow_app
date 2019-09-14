import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  items=[];

  

  constructor(
    private htttp:HttpClient
  ) { }
  getItems() {
    return this.items;
  }

  getMovements(){
    return this.htttp.get('./assets/data.json').subscribe();

  }
}
