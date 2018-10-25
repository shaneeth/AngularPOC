import { TestBed, inject } from '@angular/core/testing';

import { DonutsService } from './donuts.service';

describe('DonutsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonutsService]
    });
  });

  it('should be created', inject([DonutsService], (service: DonutsService) => {
    expect(service).toBeTruthy();
  }));
});
