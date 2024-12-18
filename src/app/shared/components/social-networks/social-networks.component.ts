import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {

  public items: MenuItem[] | null = [];

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
      },
      {
        icon: 'pi pi-refresh'
      },
      {
        icon: 'pi pi-trash'
      },
      {
        icon: 'pi pi-upload'
      },
      {
        icon: 'pi pi-external-link'
      }
    ];
  }

}
