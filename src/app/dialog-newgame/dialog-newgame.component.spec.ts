import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewgameComponent } from './dialog-newgame.component';

describe('DialogNewgameComponent', () => {
  let component: DialogNewgameComponent;
  let fixture: ComponentFixture<DialogNewgameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNewgameComponent]
    });
    fixture = TestBed.createComponent(DialogNewgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
