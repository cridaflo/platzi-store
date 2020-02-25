import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  fecha;
  constructor() {
    this.fecha = moment().format( 'YYYY/MMMM/DD');
  }

  ngOnInit(): void {
  }

}
