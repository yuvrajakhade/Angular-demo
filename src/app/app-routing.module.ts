import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalFormComponent } from './Components/normal-form/normal-form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { SidenavComponent } from './Pages/Dashboard/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashbaord', component: SidenavComponent },

  { path: 'Reactive-Form', component: ReactiveFormComponent },
  { path: 'Normal-Form', component: NormalFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
