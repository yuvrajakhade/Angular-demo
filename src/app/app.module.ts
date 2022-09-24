import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Components/AngularForms/reactive-form/reactive-form.component';
import { NormalFormComponent } from './Components/AngularForms/normal-form/normal-form.component';
import { SidenavComponent } from './Pages/Dashboard/sidenav/sidenav.component';
import { LazyloadComponent } from './Components/LazyLoading/lazyload/lazyload.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { AttributeDirective } from './Components/customDirectives/attribute-directive.directive';
import { StructuralDirective } from './Components/customDirectives/structural.directive';
import { DateTransformPipe } from './Components/Pipe/date-transform.pipe';
import { ParentComponent } from './Components/ComponentCommunication/parent/parent.component';
import { ChildComponent } from './Components/ComponentCommunication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveFormComponent,
    NormalFormComponent,
    SidenavComponent,
    LazyloadComponent,
    DirectivesComponent,
    AttributeDirective,
    StructuralDirective,
    DateTransformPipe,
    ParentComponent,
    ChildComponent,
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
