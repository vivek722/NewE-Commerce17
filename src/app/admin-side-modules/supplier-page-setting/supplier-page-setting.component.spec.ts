import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPageSettingComponent } from './supplier-page-setting.component';

describe('SupplierPageSettingComponent', () => {
  let component: SupplierPageSettingComponent;
  let fixture: ComponentFixture<SupplierPageSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPageSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierPageSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
