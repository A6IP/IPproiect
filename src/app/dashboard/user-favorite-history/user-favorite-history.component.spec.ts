import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteHistoryComponent } from './user-favorite-history.component';

describe('UserFavoriteHistoryComponent', () => {
  let component: UserFavoriteHistoryComponent;
  let fixture: ComponentFixture<UserFavoriteHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
