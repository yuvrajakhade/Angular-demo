import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-normal-form',
  templateUrl: './normal-form.component.html',
  styleUrls: ['./normal-form.component.scss'],
})
export class NormalFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.comments = 'Pravin';
  }

  // Normal template driven form
  comments: string;
  // Submit(StdForm: NgForm) {
  //   console.log(this.comments);
  // }

  add() {
    console.log(this.comments);
  }
}
