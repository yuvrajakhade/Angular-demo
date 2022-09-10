import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  number: number;
  show: boolean = false;
  coloractive: boolean = false;
  opened: any;
  role: any;
  admin: boolean;
  constructor(private router: Router) {
    this.role = 1;
    if (this.role == 1) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }
  count = 0;
  OpenOnClick() {
    if (this.count == 0) {
      this.show = true;
      this.count++;
      this.coloractive = true;
    } else {
      this.count--;
      this.show = false;
      this.coloractive = false;
    }
  }
  CloseOnClick() {
    this.show = false;
    this.coloractive = false;
  }

  userData = localStorage.getItem('userData');
  firstName = 'Yuvraj'; //JSON.parse(this.userData).f_name;
  lastName = 'Akhade'; //JSON.parse(this.userData).l_name;
  Name = this.firstName + ' ' + this.lastName;
  /**
   * ngOnInit(): void for maintaining the activated tab
   * @author yuvraj
   */
  ngOnInit() {}

  /**
   * logout() is for sign out
   * @author yuvraj
   */
  logout() {
    swal({
      text: 'Are you sure you wish to Sign Out?',
      dangerMode: true,
      buttons: ['Cancel', 'OK'],
    }).then((willsignout) => {
      if (willsignout) {
        localStorage.clear();
        this.router.navigate(['login']);
      }
    });
  }
}
