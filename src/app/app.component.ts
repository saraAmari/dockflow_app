import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
//  constructor (private httpService: HttpClient) { }
 // arrBirds: string [];

  ngOnInit () {
  /*  this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrBirds = data as string [];	
        console.log("ahawmaaa " +data);
        // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }



      
    );
*/
  }
}
