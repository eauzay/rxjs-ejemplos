import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-end-with',
  templateUrl: './end-with.component.html',
  styles: [
  ]
})
export class EndWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = of(1, 2, 3);
    //para emitir algun evento cuando se completa 	
    const example = source.pipe(endWith(4,5,6,7,8));
    //output: 1,2,3,4,5,6,7,8
    example.subscribe(val => displayLog(`${val}`));
  }

}
