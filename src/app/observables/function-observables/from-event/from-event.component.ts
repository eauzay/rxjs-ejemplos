import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { displayLog } from 'src/app/shared/utils';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html'
})
export class FromEventComponent implements OnInit {
  observable!: Observable<any>;
  actionBtn: any;

  constructor() { }

  ngOnInit(): void {
    // observable a partir del evento clic de un boton
    this.actionBtn = document.getElementById('action-btn');
    this.observable = fromEvent(this.actionBtn, 'click');
    this.observable.subscribe(data => {
      displayLog(`click event at pos (${data.x}, ${data.y})`);
    });
  }

}
