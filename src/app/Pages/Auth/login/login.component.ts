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
    this.temp = this.obj.greet('there');
  }

  ngOnInit(): void {}

  reactiveForm() {
    this.router.navigate(['/Reactive-Form']);
  }

  normalForm() {
    this.router.navigate(['/Normal-Form']);
  }
}

export class Greeter {
  greet(name: string) {
    return 'Hello ' + name + '!';
  }
}
