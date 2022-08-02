import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { reduce } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styles: [
  ]
})
export class ReduceComponent implements OnInit {
  observable!: Observable<number>;
  observable2!: Observable<number>;

  constructor() { }

  ngOnInit(): void {

    let products = [
      { product1: "A", price: 100 },
      { product2: "B", price: 70 },
      { product3: "C", price: 10 },
      { product4: "D", price: 20 }
    ];

    this.observable = from(products).pipe(reduce((acc, productsdet) => acc + productsdet.price, 0));

    //retorna la suma de todos los precios de mis productos
    this.observable.subscribe(x => displayLog("Total Price of Products is: " + x));
  }


}
