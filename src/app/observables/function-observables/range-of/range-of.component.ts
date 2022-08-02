import { Component, OnInit } from '@angular/core';
import { of, range, Observable, Subscription } from 'rxjs';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-range-of',
  templateUrl: './range-of.component.html',
})
export class RangeOfComponent implements OnInit {
  observable!: Observable<any>;
  observable2!: Observable<any>;
  observable3!: Observable<any>;

  subs!: Subscription;
  subs2!: Subscription;
  subs3!: Subscription;

  constructor() { }

  ngOnInit(): void {

    this.observable = of([1, 2, 3, 4, 5, 6]);
    this.subs = this.observable.subscribe(data => displayLog(data));

    this.observable2 = of(
      [1, 2, 3],
      "hello world",
      { foo: 'bar' },
      function sayHello() {
        return 'Hi!';
      });
    this.subs2 = this.observable2.subscribe(data => displayLog(data));

    //quiero un rango de numeros que empiece en 3 y tenga 10 valores
    this.observable3 = range(3, 10);
    this.subs3 = this.observable3.subscribe(data => displayLog(data));
  }

}
