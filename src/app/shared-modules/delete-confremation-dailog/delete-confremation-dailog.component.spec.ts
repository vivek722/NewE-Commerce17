import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfremationDailogComponent } from './delete-confremation-dailog.component';

describe('DeleteConfremationDailogComponent', () => {
  let component: DeleteConfremationDailogComponent;
  let fixture: ComponentFixture<DeleteConfremationDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteConfremationDailogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfremationDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
