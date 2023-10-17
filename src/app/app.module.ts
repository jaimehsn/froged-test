import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ClickOutsideDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
