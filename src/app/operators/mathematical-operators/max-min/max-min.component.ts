import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { max, min } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-max-min',
  templateUrl: './max-min.component.html',
  styles: [
  ]
})
export class MaxMinComponent implements OnInit {
  observable!: Observable<number>;
  observable2!: Observable<number>;
  observable3!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.observable = of(1, 3, 5, 6, 12, 13, 24, 28);
    this.observable2 = this.observable.pipe(max());
    this.observable2.subscribe(x => displayLog("El Max value is " + x));

    this.observable3 = this.observable.pipe(min());
    this.observable3.subscribe(x => displayLog("The Min value is " + x));
  }

}
