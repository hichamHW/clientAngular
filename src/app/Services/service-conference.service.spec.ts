import { TestBed } from '@angular/core/testing';

import { ServiceConferenceService } from './service-conference.service';

describe('ServiceConferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceConferenceService = TestBed.get(ServiceConferenceService);
    expect(service).toBeTruthy();
  });
});
