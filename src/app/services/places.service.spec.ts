/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Places.service.tsService } from './places.service.ts.service';

describe('Service: Places.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Places.service.tsService]
    });
  });

  it('should ...', inject([Places.service.tsService], (service: Places.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});