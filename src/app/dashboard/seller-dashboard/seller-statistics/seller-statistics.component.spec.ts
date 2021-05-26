import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStatisticsComponent } from './seller-statistics.component';

describe('SellerStatisticsComponent', () => {
  let component: SellerStatisticsComponent;
  let fixture: ComponentFixture<SellerStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
