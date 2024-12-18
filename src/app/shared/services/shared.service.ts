import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { navbarItems } from '../db/navbarItems.db';
import { dialContent } from '../db/diaItems.db';

import { NavBarInterface } from '../interfaces/nav-bar.interface';
import { DialInterface } from '../interfaces/dial.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(@Inject(HttpClient) private _http: HttpClient) { }

  get itemsNavbar() {
    return new Observable<NavBarInterface[]>(observer => {
      // Get items from the database
      observer.next(navbarItems);
      // Complete de observable
      observer.complete();
    })
  }

  get itemsDial() {
    return new Observable<DialInterface[]>(observer => {
      // Get items from the database
      observer.next(dialContent);
      // Complete de observable
      observer.complete();
    })
  }
}
