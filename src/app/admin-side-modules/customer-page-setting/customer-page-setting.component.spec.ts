import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPageSettingComponent } from './customer-page-setting.component';

describe('CustomerPageSettingComponent', () => {
  let component: CustomerPageSettingComponent;
  let fixture: ComponentFixture<CustomerPageSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPageSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPageSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
