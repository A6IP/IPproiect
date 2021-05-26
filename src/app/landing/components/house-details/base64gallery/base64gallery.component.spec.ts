import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64galleryComponent } from './base64gallery.component';

describe('Base64galleryComponent', () => {
  let component: Base64galleryComponent;
  let fixture: ComponentFixture<Base64galleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64galleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64galleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
