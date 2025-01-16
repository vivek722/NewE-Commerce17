import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvenoryComponent } from './add-invenory.component';

describe('AddInvenoryComponent', () => {
  let component: AddInvenoryComponent;
  let fixture: ComponentFixture<AddInvenoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInvenoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvenoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
