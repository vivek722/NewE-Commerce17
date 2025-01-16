import { TestBed } from '@angular/core/testing';

import { AdminCustomerServiceService } from './admin-customer-service.service';

describe('AdminCustomerServiceService', () => {
  let service: AdminCustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
