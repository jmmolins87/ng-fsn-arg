import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [
    LegalNoticeComponent,
    CookiePolicyComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoliciesModule { }
