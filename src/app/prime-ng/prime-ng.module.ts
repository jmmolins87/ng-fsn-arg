import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  exports: [
    ButtonModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
