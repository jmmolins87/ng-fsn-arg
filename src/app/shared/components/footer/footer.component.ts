import { Component, OnInit } from '@angular/core';


import { SharedService } from '../../services/shared.service';

import { footerInterface } from '../../interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear: number = new Date().getFullYear();
  public policies: footerInterface[] = [];
  public contactItems: footerInterface[] = [];

  constructor( private _sharedService: SharedService ) {}

  ngOnInit(): void {
    this.getPolicies();
    this.getContact();
  }

  getPolicies() {
    this._sharedService.itemsPoliciesFooter.subscribe(items => {
      this.policies = items;
    });
    return this.policies;
  }

  getContact() {
    this._sharedService.itemsContactFooter.subscribe(items => {
      this.contactItems = items;
    });
    return this.contactItems;
  }

}
