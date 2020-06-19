import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './comps/IO-FN/parent/parent.component';
import { ChildComponent } from './comps/IO-FN/child/child.component';
import { ChildOutputComponent } from './comps/IO-FN/child-output/child-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
