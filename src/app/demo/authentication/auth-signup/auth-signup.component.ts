import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  simpleOption:  Array<IOption> = [
    {value: '1', label: 'Frutas y Verduras'},
    {value: '2', label: 'Cárnicos'},
    {value: '3', label: 'Panadería'},
    {value: '4', label: 'Fríos y Congelados'}
    ];
  customerType: string = null;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange(value) {
    console.log(value);
  }

  signUp() {
    this.router.navigate(['/dashboard/e-commerce']);
  }
}
