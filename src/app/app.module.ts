import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './views/heroes/heroes.component';

const ViewsDeclarations = [HeroesComponent];

@NgModule({
  declarations: [AppComponent, ViewsDeclarations],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
