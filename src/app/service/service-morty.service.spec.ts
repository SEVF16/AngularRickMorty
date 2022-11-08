import { TestBed } from '@angular/core/testing';

import { ServiceMortyService } from './service-morty.service';

describe('ServiceMortyService', () => {
  let service: ServiceMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
