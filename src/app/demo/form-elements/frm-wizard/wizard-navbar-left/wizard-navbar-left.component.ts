import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-navbar-left',
  templateUrl: './wizard-navbar-left.component.html',
  styleUrls: ['./wizard-navbar-left.component.scss']
})
export class WizardNavbarLeftComponent implements OnInit {

  public radioButtons: string;
  public showResult = false;
  constructor() {
    this.radioButtons = '1';
  }

  ngOnInit() {
  }

  calculate() {
    this.showResult = true;
  }
}
