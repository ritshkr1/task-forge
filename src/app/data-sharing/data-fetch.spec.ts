import { TestBed } from '@angular/core/testing';

import { DataFetch } from './data-fetch';

describe('DataFetch', () => {
  let service: DataFetch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
