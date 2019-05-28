import { TestBed } from '@angular/core/testing';

import { CloudFilestorePaginationService } from './cloud-filestore-pagination.service';

describe('CloudFilestorePaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudFilestorePaginationService = TestBed.get(CloudFilestorePaginationService);
    expect(service).toBeTruthy();
  });
});
