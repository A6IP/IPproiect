import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStatisticsPanelComponent } from './seller-statistics-panel.component';

describe('SellerStatisticsPanelComponent', () => {
  let component: SellerStatisticsPanelComponent;
  let fixture: ComponentFixture<SellerStatisticsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerStatisticsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerStatisticsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
