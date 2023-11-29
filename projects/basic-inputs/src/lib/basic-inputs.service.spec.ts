import { TestBed } from '@angular/core/testing';

import { BasicInputsService } from './basic-inputs.service';

describe('BasicInputsService', () => {
  let service: BasicInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
