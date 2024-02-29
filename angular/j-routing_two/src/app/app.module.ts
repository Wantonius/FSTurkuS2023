import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { About } from './components/about.component';
import { Home } from './components/home.component';
import { Secret } from './components/secret.component';

@NgModule({
  declarations: [
    AppComponent,
	About,
	Home,
	Secret
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
