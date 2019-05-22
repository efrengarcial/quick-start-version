import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

  show1 = false;
  show2 = false;
  tabular = true;
  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('searching...');
    this.show1 = false;
    this.show2 = false;
    if (this.tabular) {
      this.show1 = true;
    } else {
      this.show2 = true;
    }
  }
}
