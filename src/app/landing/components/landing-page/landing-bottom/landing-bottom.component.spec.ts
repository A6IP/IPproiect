import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBottomComponent } from './landing-bottom.component';

describe('LandingBottomComponent', () => {
  let component: LandingBottomComponent;
  let fixture: ComponentFixture<LandingBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
