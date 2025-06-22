import { TestBed } from '@angular/core/testing';

import { CountGameService } from './count-game.service';

describe('CountGameService', () => {
  let service: CountGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
