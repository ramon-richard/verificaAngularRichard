import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  secondo:string;
  constructor() { 
    this.secondo = "secondo"
  }

  ngOnInit(): void {
  }

}
