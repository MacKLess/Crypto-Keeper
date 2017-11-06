import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { routing } from './app.routing';
import { Animal } from './animal.model';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
