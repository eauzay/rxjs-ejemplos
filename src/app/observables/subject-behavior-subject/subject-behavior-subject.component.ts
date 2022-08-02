import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-subject-behavior-subject',
  templateUrl: './subject-behavior-subject.component.html',
  styles: [
  ]
})
export class SubjectBehaviorSubjectComponent implements OnInit {
  sourceSubject = new Subject<string>();

  // debe ser inicializado
  sourceBehavior = new BehaviorSubject<string>('Inicio');

  constructor() { }

  ngOnInit(): void {

    //Subject
    this.sourceSubject.next('hello');
    // el valor que emite lo hace a partir desde que nos suscribimos
    this.sourceSubject.subscribe(data => displayLog(data));
    this.sourceSubject.next('world');


    //BehaviorSubject
    this.sourceBehavior.next('Behavior example');
    // emite el ultimo valor a todas las nuevas suscripciones
    this.sourceBehavior.subscribe(data => displayLog(data));
    this.sourceBehavior.next('Welcome');
    
  }

}
