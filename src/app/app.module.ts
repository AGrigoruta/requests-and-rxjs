import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { StreamComponentComponent } from './stream-component/stream-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentComponent,
    StreamComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
