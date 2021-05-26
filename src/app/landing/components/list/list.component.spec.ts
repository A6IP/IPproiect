import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should return the format',()=>{
  //   var result=component.data.get;
  //   expect(result).toBe("userID: a17dc1b8-a1be-435e-b645-ae1c42d45277", "description a doua casa", "title:casa de inchiriat", "city: Iasi", "country: Romania", "address:Strada Arges, nr 2", "constructionYear: 1977", "noOfRooms: 3", "floor: 1", "surface: 60", "landSurface: 60", "noOfBathrooms: 2", "houseType: 1", "sellType: 1", "currentPrice: 400");
  // })

  // it('should return data',()=>{
  //   if(Storage==null)
  //      expect(component.totalRecords).toEqual(component.data);
  //      else
  //      expect(component.totalRecords).toBeLessThan(component.data);
  // })
});
