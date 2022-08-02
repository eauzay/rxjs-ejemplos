import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { endWith, filter, map, startWith } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styles: [
  ]
})
export class Example1Component implements OnInit {
  observable!: Observable<any>;

  constructor() { }

  ngOnInit(): void {

    //creo una secuencia de numeros utilizando la funcion of
    const numeros$ = of(1, 2, 3, 4, 5, 6);

    this.observable = numeros$.pipe(
      filter((x: number) => x % 2 === 0), 
      map(x => x * x),
      startWith("Inicio de ejercicio :","Cuadrado de numeros pares"),
      endWith(" Fin de ejercicio", "Adios!!!!")
    );

    this.observable.subscribe(data => displayLog(`${data}`))
  }

}
