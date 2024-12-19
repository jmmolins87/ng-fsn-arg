import { Component, HostListener, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { SharedService } from '../../services/shared.service';

import { NavBarInterface } from '../../interfaces/nav-bar.interface';
import { TranslatorService } from '../../services/translator.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // Get items menu
  public menuItems!: NavBarInterface[] | any[];
  // When user scrolls page
  public scrolled: boolean = false;
  // It is bigger than a tablet
  public isTablet: boolean = false;

  constructor( 
    private _sharedService: SharedService,
    private _translator: TranslatorService,
    private _breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.getItemsNavBar();
    this.removeAttr();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  getItemsNavBar() {
    this._sharedService.itemsNavbar.subscribe(items => {
      this.menuItems = items;
    });
    return this.menuItems;
  }

  // Detect resize
  removeAttr() {
    this._breakpointObserver.observe([Breakpoints.Web, Breakpoints.Medium])
      .subscribe(result => {
        this.isTablet = result.matches;
      })
  }

  // TODO: in a future
  changeLang( lang: string) {
    this._translator.changeLang(lang);
  }

}
