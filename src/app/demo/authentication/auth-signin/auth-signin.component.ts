import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  public email1 = '';
  public password1 = '';
  public isSubmit: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.router.navigate(['/dashboard/e-commerce']);
  }

}
