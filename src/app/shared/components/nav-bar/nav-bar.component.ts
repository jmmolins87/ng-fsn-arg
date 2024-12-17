import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { NavBarInterface } from '../../interfaces/nav-bar.interface';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // get items menu
  public menuItems!: NavBarInterface[] | any[];

  constructor( 
    private _sharedService: SharedService,
    private _translator: TranslatorService 
  ) {}

  ngOnInit(): void {
    this.getItemsNavBar();
  }

  getItemsNavBar() {
    this._sharedService.itemsNavbar.subscribe(items => {
      this.menuItems = items;
    });
    return this.menuItems;
  }

  changeLang( lang: string) {
    this._translator.changeLang(lang);
  }

}
