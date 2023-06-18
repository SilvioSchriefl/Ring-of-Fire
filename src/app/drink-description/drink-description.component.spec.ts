import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkDescriptionComponent } from './drink-description.component';

describe('DrinkDescriptionComponent', () => {
  let component: DrinkDescriptionComponent;
  let fixture: ComponentFixture<DrinkDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkDescriptionComponent]
    });
    fixture = TestBed.createComponent(DrinkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
