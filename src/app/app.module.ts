import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

//ngrx store
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';

//ngrx store devtools

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

//reactive forms
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }