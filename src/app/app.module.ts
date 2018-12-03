import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/EventsComponent';
import { EventDataService } from './event-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
