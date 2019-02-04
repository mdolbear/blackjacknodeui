import { TestBed } from '@angular/core/testing';

import { CardImageService } from './card-image.service';

describe('CardImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardImageService = TestBed.get(CardImageService);
    expect(service).toBeTruthy();
  });
});
