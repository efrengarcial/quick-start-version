import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'wizard',
        loadChildren: './frm-wizard/frm-wizard.module#FrmWizardModule'
      },
      {
        path: 'tracking',
        loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }
