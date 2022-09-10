import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { NormalFormComponent } from './Pages/Components/normal-form/normal-form.component';
import { ReactiveFormComponent } from './Pages/Components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'Reactive-Form', component: ReactiveFormComponent },
  { path: 'Normal-Form', component: NormalFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
