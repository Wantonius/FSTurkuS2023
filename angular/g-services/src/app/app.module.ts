import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import {ContactService} from './services/contactservice.service';

import { AppComponent } from './app.component';
import { ContactList } from './components/contactlist.component';
@NgModule({
  declarations: [
    AppComponent,
	ContactList
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
