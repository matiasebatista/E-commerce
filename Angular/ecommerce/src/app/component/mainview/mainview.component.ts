import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
opened = false;
panelOpenState = false;
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
