import { ComponentFixture, TestBed } from '@angular/core/testing';
import { validResetPasswd, blankResetPasswd } from 'src/mocks';
import { ResetPasswdComponent } from './reset-passwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('ResetPasswdComponent', () => {
  let component: ResetPasswdComponent;
  let fixture: ComponentFixture<ResetPasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ResetPasswdComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function updateForm(newPasswd, confirmPasswd) {
    component.resetForm.controls['newPasswd'].setValue(newPasswd);
    component.resetForm.controls['confirmPasswd'].setValue(confirmPasswd);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.resetForm).toBeDefined();
    expect(component.resetForm.invalid).toBeTruthy();
  })

  it('submitted should be true when onSubmit()', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('form value should update from when u change the input', (() => {
    updateForm("12345678", "12345678");
    expect(component.resetForm.value).toEqual(validResetPasswd);
  }));

  it('form invalid should be true when new password and confirm password are blank', (() => {
    updateForm(blankResetPasswd.newPasswd, blankResetPasswd.confirmPasswd);
    expect(component.resetForm.invalid).toBeTruthy();
  }));

  it('form invalid should be true when new password is blank', (() => {
    updateForm(blankResetPasswd.newPasswd, validResetPasswd.confirmPasswd);
    expect(component.resetForm.invalid).toBeTruthy();
  }));

  it('form invalid should be true when confirm password is blank', (() => {
    updateForm(validResetPasswd.newPasswd, blankResetPasswd.confirmPasswd);
    expect(component.resetForm.invalid).toBeTruthy();
  }));

  it('form invalid should be false when the passwords are valid ', (() => {
    updateForm(validResetPasswd.newPasswd, validResetPasswd.confirmPasswd);
    expect(component.resetForm.invalid).toBeFalsy();
  }));

  it("should call alert when passwords do not match", () => {
    spyOn(window, "alert");
    updateForm(validResetPasswd.newPasswd, "87654321");
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith("Passwords must match!");
 });  

  it('created a form with new password, confirm password input and reset button', () => {
    const newPasswdContainer = fixture.debugElement.nativeElement.querySelector('#reset-psswd');
    const confirmPasswdContainer = fixture.debugElement.nativeElement.querySelector('#confirm-psswd');
    const resetBtnContainer = fixture.debugElement.nativeElement.querySelector('#button-2');
    expect(newPasswdContainer).toBeDefined();
    expect(confirmPasswdContainer).toBeDefined();
    expect(resetBtnContainer).toBeDefined();
  });

});
