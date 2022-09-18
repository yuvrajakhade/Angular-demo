import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  StudentData: any = [
    { roleno: 11, stdclass: 'class A', name: 'Pravin' },
    { roleno: 12, stdclass: 'class B', name: 'Avinash' },
    { roleno: 33, stdclass: 'class C', name: 'Abhijit' },
    { roleno: 74, stdclass: 'class D', name: 'Yuvraj' },
  ];

  selected: boolean = false;
  role_no: any;
  class: any;
  onClick(stud: any) {
    this.role_no = stud.roleno;
    this.class = stud.stdclass;
    this.selected = true;

    // this.StudentData = this.StudentData.filter(
    //   (item: { roleno: void }) => item.roleno != this.role_no //11 !=33
    // );
  }

  onClear() {
    this.role_no = '';
    this.class = '';
    this.selected = false;
  }
  ngOnInit(): void {
    this.role_no = this.StudentData[0].roleno;
  }

  getColor(country: any) {
    switch (country) {
      case 11:
        return 'green';
      case 12:
        return 'blue';
      case 33:
        return 'red';
      default:
        return 'gray';
    }
  }

  //PIPE
  dateTime = new Date();
  dateTime1 = '02/10/2021 13:11:22';
}
