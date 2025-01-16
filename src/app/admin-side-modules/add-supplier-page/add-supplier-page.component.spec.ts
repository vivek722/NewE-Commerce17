import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierPageComponent } from './add-supplier-page.component';

describe('AddSupplierPageComponent', () => {
  let component: AddSupplierPageComponent;
  let fixture: ComponentFixture<AddSupplierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSupplierPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupplierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
