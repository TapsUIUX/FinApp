import { TestBed } from '@angular/core/testing';

import { ScreenDataService } from './screen-data.service';

describe('ScreenDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenDataService = TestBed.get(ScreenDataService);
    expect(service).toBeTruthy();
  });
});
