import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHousePanelComponent } from './seller-house-panel.component';

describe('SellerHousePanelComponent', () => {
  let component: SellerHousePanelComponent;
  let fixture: ComponentFixture<SellerHousePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHousePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHousePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
