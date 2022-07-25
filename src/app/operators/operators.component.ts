import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  list = [10, 20, 30];
  private myArrayOf$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
