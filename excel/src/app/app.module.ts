import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainService } from './main.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
