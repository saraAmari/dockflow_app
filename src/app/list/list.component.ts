import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from "@angular/common";
import { MovementService } from "../movement.service";
import { Movement } from '../models/movement.model';
import * as dataFile from '../../assets/data.json'; 



const format = 'dd/MM/yyyy';
const myDate = '2019-06-29';
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);
console.log("hethaa el date " + formattedDate);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dateStr: string;
  mb: Movement;
  SelectedMovement: Movement;
  listMov: Array<Movement> = [];
json: any = dataFile;
  MovementS: MovementService;
  constructor(private _http: HttpClient) { }

  ngOnInit() { 

    this._http.get('./assets/data.json').subscribe((data : any[])=> {

     for (let index = 1; index < data.length; index++) {
        this.mb = new Movement(data[index]);
        this.listMov.push(this.mb);

      }
      this.SelectedMovement = new Movement(data[0]);
      this.dateStr = formatDate(this.SelectedMovement['newDate_vl_readings_datetime'], format, locale);

      //"28/01/2014";

      console.log("hethaa dateStr : " + this.dateStr);

    }
    );
  }



 


}