import { TestBed } from '@angular/core/testing';

import { ConferenceServicesService } from './conference-services.service';

describe('ConferenceServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceServicesService = TestBed.get(ConferenceServicesService);
    expect(service).toBeTruthy();
  });
});
