import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswdComponent } from './forgot-passwd.component';

describe('ForgotPasswdComponent', () => {
  let component: ForgotPasswdComponent;
  let fixture: ComponentFixture<ForgotPasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
