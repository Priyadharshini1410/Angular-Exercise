import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {
     form = new FormGroup({
       username:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required)
      })
  get username(){
    return this.form.get('username');
    return this.form.get('password');
  }

}
