import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements OnInit {
  observable!: Observable<number>;
  observable2!: Observable<number>;
  observable3!: Observable<any>;
  observable4!: Observable<any>;
  constructor() { }

  ngOnInit(): void {

    this.observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //add 20 to each value  
    this.observable2 = this.observable.pipe(map(val => val + 20));
    this.observable2.subscribe(val => displayLog(`${val}`));

    this.observable3 = from([
      { name: 'Alex', age: 31 },
      { name: 'Adam', age: 28 },
      { name: 'Alia', age: 21 },
      { name: 'David', age: 35 },
      { name: 'Rhea', age: 28 },
      { name: 'Samson', age: 31 },
      { name: 'Dhoni', age: 35 }
    ]);

    this.observable4 = this.observable3.pipe(map(({ name }) => name));
    this.observable4.subscribe(val => displayLog(val));
  }

}
