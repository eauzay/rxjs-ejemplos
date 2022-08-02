import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { displayLog } from '../../shared/utils';

@Component({
  selector: 'app-creation-observables',
  templateUrl: './creation-observables.component.html',
  styleUrls: ['./creation-observables.component.css']
})
export class CreationObservablesComponent implements OnInit {

  ngOnInit(): void {
    const obs$ = new Observable<string>(subs => {
      //funcion que emite el valor que deseo 
      subs.next('Welcome to ');
      subs.next('RxJs');
      subs.next('Hello');

      //una vez que pongo el complete ya no se emita nada mas
      subs.complete();
    });

    const subscribe = obs$.subscribe(
      data => displayLog(data)
    );
  }


}
