import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventRegisteredComponent } from './user-event-registered.component';

describe('UserEventRegisteredComponent', () => {
  let component: UserEventRegisteredComponent;
  let fixture: ComponentFixture<UserEventRegisteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEventRegisteredComponent]
    });
    fixture = TestBed.createComponent(UserEventRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
