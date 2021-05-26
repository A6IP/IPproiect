import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePanelComponent } from './favorite-panel.component';

describe('FavoritePanelComponent', () => {
  let component: FavoritePanelComponent;
  let fixture: ComponentFixture<FavoritePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
