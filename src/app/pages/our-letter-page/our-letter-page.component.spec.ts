import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLetterPageComponent } from './our-letter-page.component';

describe('OurLetterPageComponent', () => {
  let component: OurLetterPageComponent;
  let fixture: ComponentFixture<OurLetterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLetterPageComponent]
    });
    fixture = TestBed.createComponent(OurLetterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
