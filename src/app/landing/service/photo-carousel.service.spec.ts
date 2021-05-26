import { TestBed } from '@angular/core/testing';

import { PhotoCarouselService } from './photo-carousel.service';

describe('PhotoCarouselService', () => {
  let service: PhotoCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
