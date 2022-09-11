import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalFormComponent } from './Components/AngularForms/normal-form/normal-form.component';
import { ReactiveFormComponent } from './Components/AngularForms/reactive-form/reactive-form.component';
import { LazyloadComponent } from './Components/LazyLoading/lazyload/lazyload.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { SidenavComponent } from './Pages/Dashboard/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashbaord',
    component: SidenavComponent,
    children: [
      { path: '', component: LazyloadComponent },
      {
        path: 'a',
        loadChildren: () =>
          import(
            './Components/LazyLoading/lazyloadModule/modulea/modulea.module'
          ).then((m) => m.ModuleaModule),
      },
      {
        path: 'b',
        loadChildren: () =>
          import(
            './Components/LazyLoading/lazyloadModule/moduleb/moduleb.module'
          ).then((m) => m.ModulebModule),
      },
      { path: 'Normal-Form', component: NormalFormComponent },
      { path: 'Reactive-Form', component: ReactiveFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
