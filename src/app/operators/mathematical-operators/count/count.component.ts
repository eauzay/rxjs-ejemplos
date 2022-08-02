import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of, Subscription } from 'rxjs';
import { count, map, tap } from 'rxjs/operators'
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styles: [
  ]
})
export class CountComponent implements OnInit {
  observable!: Observable<number>;
  observable2!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.observable = of(1, 3, 5, 7, 11, 13, 23, 27);

    //retorna la cantidad de numeros dados
    this.observable2 = this.observable.pipe(count());
    this.observable2.subscribe(x => displayLog("The count is " + x));
  }
}
