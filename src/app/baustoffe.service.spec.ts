import { TestBed } from '@angular/core/testing';

import { BaustoffeService } from './baustoffe.service';

describe('BaustoffeService', () => {
  let service: BaustoffeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaustoffeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
