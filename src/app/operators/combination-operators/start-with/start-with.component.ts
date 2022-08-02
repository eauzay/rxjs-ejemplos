import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styles: [
  ]
})
export class StartWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //emit (1,2,3)
    const source = of(1, 2, 3);
    //modifica el observable para emitir ciertos valores de forma previa 
    //a cualquier evento del observable original 
    const example = source.pipe(startWith(0));
    //output: 0,1,2,3
    example.subscribe(val => displayLog(`${val}`));
  }

}
