import { TestBed } from '@angular/core/testing';

import { ProductDummyService } from './product-dummy.service';

describe('ProductDummyService', () => {
  let service: ProductDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
