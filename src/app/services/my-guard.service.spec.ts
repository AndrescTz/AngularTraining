/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyGuardService } from './my-guard.service';

describe('Service: MyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGuardService]
    });
  });

  it('should ...', inject([MyGuardService], (service: MyGuardService) => {
    expect(service).toBeTruthy();
  }));
});