import { TestBed } from '@angular/core/testing';

import { CloudFilestoreApiService } from './cloud-filestore-api.service';

describe('CloudFilestoreApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudFilestoreApiService = TestBed.get(CloudFilestoreApiService);
    expect(service).toBeTruthy();
  });
});
