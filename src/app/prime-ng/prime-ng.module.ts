import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  exports: [
    ButtonModule,
    ScrollTopModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
