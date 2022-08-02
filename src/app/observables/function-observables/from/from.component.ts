import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html'
})
export class FromComponent implements OnInit {
  myArray = [1, 2, 3, 4, 5];
  myString = "Hello world!";
  myPromise!: Promise<any>;

  observable!: Observable<any>;
  observable2!: Observable<any>;
  observable3!: Observable<any>;

  subs!: Subscription;
  subs2!: Subscription;
  subs3!: Subscription;

  constructor() {
    this.myPromise = new Promise(resolve => setTimeout(() => {
      resolve('Welcome!');
    }, 2000));
  }

  ngOnInit(): void {

    //Convierte una array en observable
    this.observable = from(this.myArray);
    this.subs = this.observable.subscribe(data => displayLog(data));

    //Convierte un string en observable
    this.observable2 = from(this.myString);
    this.subs2 = this.observable2.subscribe(data => displayLog(data));

    //Convierte una promesa en observable
    this.observable3 = from(this.myPromise);
    this.subs3 = this.observable3.subscribe(data => displayLog(data));
  }
}
