import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEconomicsBookComponent } from './detail-economics-book.component';

describe('DetailEconomicsBookComponent', () => {
  let component: DetailEconomicsBookComponent;
  let fixture: ComponentFixture<DetailEconomicsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEconomicsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEconomicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
