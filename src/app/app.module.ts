import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { NormalFormComponent } from './Components/normal-form/normal-form.component';
import { SidenavComponent } from './Pages/Dashboard/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveFormComponent,
    NormalFormComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
