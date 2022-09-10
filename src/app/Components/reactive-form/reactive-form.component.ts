import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';

import { Address } from '../models/address.model';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  submitted: boolean = false; //display result div on condition

  address = new Address('', '');
  student = new Student('', '', this.address, '');

  // Form Group
  // studentForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   message: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //   }),
  //   comments: new FormControl(''),
  // });

  studentForm: FormGroup; //use when you want use form builder
  ngOnInit() {
    //Form Builder
    this.studentForm = this.fb.group({
      name: ['Yuvraj', Validators.required],
      message: [''],
      address: this.fb.group({
        city: [''],
        state: ['MH', Validators.required],
      }),
      comments: [''],
    });
  }

  // Reactive form
  onSubmit() {
    this.submitted = true;
    this.student.name = this.studentForm.value.name;
    this.student.message =
      this.studentForm.value.message == ''
        ? 'HII'
        : this.studentForm.value.message;
    this.student.address.city = this.studentForm.value.address.city;
    this.student.address.state = this.studentForm.value.address.state;
    this.student.comments = this.studentForm.value.comments;

    console.log('====================================');
    console.log(this.studentForm.value);
    console.log('====================================');
  }
}
