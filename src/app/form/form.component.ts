import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  log(x:any) {

    console.log(x);

  }
  countrylist=[
    {"countryname":"India"},
    {"countryname":"America"},
    {"countryname":"China"},
    {"countryname":"Japan"},
  ]

submit(f:any){
  console.log(f);
}
}
