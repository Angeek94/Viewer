import { TestBed } from '@angular/core/testing';

import { ManagestateService } from './managestate.service';

describe('ManagestateService', () => {
  let service: ManagestateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagestateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
