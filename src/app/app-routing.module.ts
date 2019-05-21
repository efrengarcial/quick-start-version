import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'auth/signin',
        loadChildren: './demo/authentication/auth-signin/auth-signin.module#AuthSigninModule'
      },
      {
        path: 'auth/signup',
        loadChildren: './demo/authentication/auth-signup/auth-signup.module#AuthSignupModule'
      },
      {
        path: 'auth/reset-password',
        loadChildren: './demo/authentication/auth-reset-password/auth-reset-password.module#AuthResetPasswordModule'
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'purchase-order',
        loadChildren: './demo/extra/sample-page/sample-page.module#SamplePageModule'
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'forms',
        loadChildren: './demo/form-elements/form-elements.module#FormElementsModule'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
