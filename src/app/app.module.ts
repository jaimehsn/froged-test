import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
