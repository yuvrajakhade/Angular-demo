import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  foods: Food[] = [
    { value: '100', viewValue: 'Pizza' },
    { value: '200', viewValue: 'Tacos' },
  ];
}
