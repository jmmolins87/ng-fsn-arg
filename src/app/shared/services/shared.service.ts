import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { navbarItems } from '../db/navbarItems.db';

import { NavBarInterface } from '../interfaces/nav-bar.interface';

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
}
