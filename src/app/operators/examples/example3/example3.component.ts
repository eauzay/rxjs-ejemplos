import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styles: []
})
export class Example3Component implements OnInit {
  element: any;

  constructor() { }

  ngOnInit(): void {
    this.element = document.getElementById('searchText'); // Campo de búsqueda
    const keyUp$ = fromEvent<KeyboardEvent>(this.element, 'keyup'); // Capturamos el evento keyup

    keyUp$.pipe( // Observable sobre el evento KeyUp
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value), //Recuperamos el valor del campo en el evento
      map((value) => value.trim()),
      filter((text: string) => text.length > 2),
      debounceTime(3000), // Espera 3seg para no enviar la petición con cada nuevo caracter
      distinctUntilChanged(),  // Comprueba que el valor haya cambiado respecto a la emision anterior.
    ).subscribe(data => displayLog(`${data}`));
  }
}
