import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { displayLog } from '../../../shared/utils';

@Component({
  selector: 'app-interval-time',
  templateUrl: './interval-time.component.html',
  styles: [
  ]
})
export class IntervalTimeComponent implements OnInit {

  observable!: Observable<any>;
  observable2!: Observable<any>;

  subs!: Subscription;
  subs2!: Subscription;

  constructor() { }

  ngOnInit(): void {
    //va a ser una llamada una vez cada 1 segundo
    this.observable = interval(1000);

    this.subs = this.observable.subscribe(data => displayLog(data));
    timer(3000).subscribe(() => this.subs.unsubscribe());


    //se ejecuta despues de 4 segundos cada un segundo
    this.observable2 = timer(4000, 1000);
    this.subs2 = this.observable2.subscribe(data => displayLog(`2 - ${data}`));
    timer(8000).subscribe(() => this.subs2.unsubscribe());

  }

}
