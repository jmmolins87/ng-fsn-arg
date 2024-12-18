import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { DialInterface } from '../../interfaces/dial.interface';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {

  public itemsDial: DialInterface[] | undefined;

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this.getItemsDial();  
  }

  getItemsDial() {
    this._sharedService.itemsDial.subscribe(items => {
      this.itemsDial = items;
    })

    return this.itemsDial;
  }

}
