import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

import { HeroesContainerComponent } from './views/heroes/heroes.component';
import { DashboardContainerComponent } from './views/dashboard/dashboard.component';

import { MessagesComponent } from './components/messages/messages.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

const ViewsDeclarations = [
  HeroesContainerComponent,
  DashboardContainerComponent
];
const ComponentsDeclarations = [
  MessagesComponent,
  HeroDetailComponent,
  HeroSearchComponent
];

@NgModule({
  declarations: [AppComponent, ViewsDeclarations, ComponentsDeclarations],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
