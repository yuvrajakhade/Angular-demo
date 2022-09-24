import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() count: number;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}

  // temp: any = [];
  addNewItem(value: string) {
    // this.temp = [{ name: 'yuvraj', id: 1 }];

    this.newItemEvent.emit(value);
  }
}
