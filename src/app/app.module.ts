import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoDashboardModule} from './todo-dashboard/todo-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
