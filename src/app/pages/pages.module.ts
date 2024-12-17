import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsPageComponent } from './us-page/us-page.component';
import { OurTeamPageComponent } from './our-team-page/our-team-page.component';
import { OurFavDishesPageComponent } from './our-fav-dishes-page/our-fav-dishes-page.component';
import { OurLetterPageComponent } from './our-letter-page/our-letter-page.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    UsPageComponent,
    OurTeamPageComponent,
    OurFavDishesPageComponent,
    OurLetterPageComponent,
    ReservationsPageComponent,
    EventsPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
