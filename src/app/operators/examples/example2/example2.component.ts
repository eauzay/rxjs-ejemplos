import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map, max, take } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styles: [
  ]
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numeros$ = range(1, 20);
    const subs1 = numeros$.pipe(
      max(),
      map(x => '#' + x)
    ).subscribe(data => displayLog(`${data}`))

    
    const subs2 = numeros$.pipe(
      take(5), //sirve para limitar  la cantidad de emisiones que un observable puede tener
      max(),
      map(x => '#' + x)
    ).subscribe(data => displayLog(`${data}`))
  }

}
