import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChackoutComponent } from './user-chackout.component';

describe('UserChackoutComponent', () => {
  let component: UserChackoutComponent;
  let fixture: ComponentFixture<UserChackoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserChackoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChackoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
