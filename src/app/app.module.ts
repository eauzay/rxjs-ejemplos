import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationObservablesComponent } from './observables/creation-observables/creation-observables.component';
import { FromComponent } from './observables/function-observables/from/from.component';
import { RangeOfComponent } from './observables/function-observables/range-of/range-of.component';
import { IntervalTimeComponent } from './observables/function-observables/interval-time/interval-time.component';
import { FromEventComponent } from './observables/function-observables/from-event/from-event.component';

import { MapComponent } from './operators/transformation-operators/map/map.component';
import { MapToComponent } from './operators/transformation-operators/map-to/map-to.component';
import { SwitchMapComponent } from './operators/transformation-operators/switch-map/switch-map.component';
import { StartWithComponent } from './operators/combination-operators/start-with/start-with.component';
import { EndWithComponent } from './operators/combination-operators/end-with/end-with.component';
import { CountComponent } from './operators/mathematical-operators/count/count.component';
import { MaxMinComponent } from './operators/mathematical-operators/max-min/max-min.component';
import { ReduceComponent } from './operators/mathematical-operators/reduce/reduce.component';
import { Example1Component } from './operators/examples/example1/example1.component';
import { Example2Component } from './operators/examples/example2/example2.component';
import { SubjectBehaviorSubjectComponent } from './observables/subject-behavior-subject/subject-behavior-subject.component';
import { Example3Component } from './operators/examples/example3/example3.component';
import { Example4Component } from './operators/examples/example4/example4.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationObservablesComponent,
    FromComponent,
    RangeOfComponent,
    IntervalTimeComponent,
    FromEventComponent,
    CountComponent,
    MaxMinComponent,
    ReduceComponent,
    MapComponent,
    MapToComponent,
    SwitchMapComponent,
    StartWithComponent,
    EndWithComponent,
    Example1Component,
    Example2Component,
    SubjectBehaviorSubjectComponent,
    Example3Component,
    Example4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
