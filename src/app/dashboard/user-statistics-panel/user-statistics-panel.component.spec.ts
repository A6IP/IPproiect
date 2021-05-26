import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticsPanelComponent } from './user-statistics-panel.component';

describe('UserStatisticsPanelComponent', () => {
  let component: UserStatisticsPanelComponent;
  let fixture: ComponentFixture<UserStatisticsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
