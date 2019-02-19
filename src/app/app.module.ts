import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesContainerComponent } from './views/heroes/heroes.component';
import { DashboardContainerComponent } from './views/dashboard/dashboard.component';

import { MessagesComponent } from './components/messages/messages.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const ViewsDeclarations = [
  HeroesContainerComponent,
  DashboardContainerComponent
];
const ComponentsDeclarations = [MessagesComponent, HeroDetailComponent];

@NgModule({
  declarations: [AppComponent, ViewsDeclarations, ComponentsDeclarations],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
