import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styles: [
  ]
})
export class SwitchMapComponent implements OnInit {
  observable!: Observable<any>;
  observable2!: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.observable = of('Hello guys, Welcome To');
    this.observable2 = this.observable.pipe(switchMap((value) => of(value + ' RxJs Course!')));
    this.observable2.subscribe((value) => { displayLog(value); });
  }

}
