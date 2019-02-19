import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesContainerComponent } from './views/heroes/heroes.component';
import { DashboardContainerComponent } from './views/dashboard/dashboard.component';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'heroes', component: HeroesContainerComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
