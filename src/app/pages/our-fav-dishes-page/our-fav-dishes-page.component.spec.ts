import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFavDishesPageComponent } from './our-fav-dishes-page.component';

describe('OurFavDishesPageComponent', () => {
  let component: OurFavDishesPageComponent;
  let fixture: ComponentFixture<OurFavDishesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurFavDishesPageComponent]
    });
    fixture = TestBed.createComponent(OurFavDishesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
