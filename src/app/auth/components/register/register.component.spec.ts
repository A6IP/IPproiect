import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { validRegister, blankRegister } from 'src/mocks';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatButtonToggleModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  function updateForm(username,firstName,lastName,emailAddress,phoneNumber,passwd,confirmPasswd) {
    component.registerForm.controls['username'].setValue(username);
    component.registerForm.controls['firstName'].setValue(firstName);
    component.registerForm.controls['lastName'].setValue(lastName);
    component.registerForm.controls['emailAddress'].setValue(emailAddress);
    component.registerForm.controls['phoneNumber'].setValue(phoneNumber);
    component.registerForm.controls['passwd'].setValue(passwd);
    component.registerForm.controls['confirmPasswd'].setValue(confirmPasswd);
  }
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.registerForm).toBeDefined();
    expect(component.registerForm.invalid).toBeTruthy();
  })
  it('submitted should be true when calling onSubmit()', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('form invalid should be true when username is blank', () => {
    updateForm(blankRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be true when firstName is blank', () => {
    updateForm(validRegister.username,blankRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be true when lastName is blank', () => {
    updateForm(validRegister.username,validRegister.firstName,blankRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be true when email address is blank', () => {
    updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,blankRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be true when phone number is blank', () => {
    updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,blankRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be true when password is blank', () => {
    updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,blankRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be true when confirm password is blank', () => {
    updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,blankRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeTruthy();
  });
  it('form invalid should be false when form is correct', () => {
    updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
    expect(component.registerForm.invalid).toBeFalsy();
  });
  it("should call alert when passwords do not match", () => {
    spyOn(window, "alert");
    updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"password",validRegister.confirmPasswd);
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith("Passwords must match!");
 });  
 it("should call alert when userType not selected", () => {
  spyOn(window, "alert");
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
  component.registerForm.controls['userType'].setValue("Buyer");
  component.onSubmit();
  expect(window.alert).not.toHaveBeenCalledWith("userType must be selected");
});  
it("should not call alert when userType  selected", () => {
  spyOn(window, "alert");
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,validRegister.passwd,validRegister.confirmPasswd);
  component.onSubmit();
  expect(window.alert).toHaveBeenCalledWith("userType must be selected");
});  
 it("form invalid when phone number doesn't have length 10", () => {
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,"123456789",validRegister.passwd,validRegister.confirmPasswd);
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,"12345678955",validRegister.passwd,validRegister.confirmPasswd);
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,"12345",validRegister.passwd,validRegister.confirmPasswd);
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,"123456",validRegister.passwd,validRegister.confirmPasswd);
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,"1234567",validRegister.passwd,validRegister.confirmPasswd);
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,"12345678",validRegister.passwd,validRegister.confirmPasswd);
  expect(component.registerForm.invalid).toBeTruthy();
});  
it("form invalid when password has length less than 8", () => {
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"passwor","passwor");
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"passwo","passwo");
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"passw","passw");
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"pass","pass");
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"pas","pas");
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"pa","pa");
  expect(component.registerForm.invalid).toBeTruthy();
  updateForm(validRegister.username,validRegister.firstName,validRegister.lastName,validRegister.emailAddress,validRegister.phoneNumber,"p","p");
  expect(component.registerForm.invalid).toBeTruthy();


  
});  

});
