import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  temp: any;
  obj = new Greeter();
  constructor(private router: Router) {
    this.temp = this.obj.greet('Yuvraj');
  }
  ngOnInit(): void {}
  login() {
    this.router.navigate(['/home']);
  }
}

export class Greeter {
  greet(name: string) {
    return 'Hello ' + name + '!';
  }
}
