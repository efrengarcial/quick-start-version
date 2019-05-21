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
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: 'signin',
        loadChildren: './demo/authentication/auth-signin/auth-signin.module#AuthSigninModule'
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
