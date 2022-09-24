import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  intitalCount: number = 10;

  constructor() {}

  ngOnInit(): void {}

  Increment() {
    ++this.intitalCount;
  }

  Decrement() {
    --this.intitalCount;
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
