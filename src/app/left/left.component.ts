import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  books=[
    {
      'bookid':101,
      'bookname':'ponniyinselvan',
      'author':'kalki',
      'status':'available',
      'category':'history'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
