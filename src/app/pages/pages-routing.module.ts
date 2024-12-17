import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { UsPageComponent } from './us-page/us-page.component';
import { OurTeamPageComponent } from './our-team-page/our-team-page.component';
import { OurFavDishesPageComponent } from './our-fav-dishes-page/our-fav-dishes-page.component';
import { OurLetterPageComponent } from './our-letter-page/our-letter-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'us',
    component: UsPageComponent
  },
  {
    path: 'team',
    component: OurTeamPageComponent
  },
  {
    path: 'fav-dishes',
    component: OurFavDishesPageComponent
  },
  {
    path: 'letter',
    component: OurLetterPageComponent
  },
  {
    path: 'events',
    component: EventsPageComponent
  },
  {
    path: 'reservations',
    component: ReservationsPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
