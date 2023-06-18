import { TestBed } from '@angular/core/testing';

import { RingFirestoreService } from './ring-firestore.service';

describe('RingFirestoreService', () => {
  let service: RingFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
