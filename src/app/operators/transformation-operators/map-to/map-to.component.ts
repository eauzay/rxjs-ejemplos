import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styles: [
  ]
})
export class MapToComponent implements OnInit {
  observable!: Observable<number>;
  observable2!: Observable<string>;
  observable3!: Observable<any>;
  observable4!: Observable<any>;
  constructor() { }

  ngOnInit(): void {
    //asignar todas las emisiones a un valor  
    this.observable = interval(3000);
    this.observable2 = this.observable.pipe(mapTo('Welcome!'));
    this.observable2.subscribe(val => displayLog(val));


    this.observable3 = fromEvent(document, 'click');
    //mapea todas las emisiones a un valor  
    this.observable4 = this.observable3.pipe(mapTo('Hello World!'));
    this.observable4.subscribe(val => displayLog(val));
  }

}
