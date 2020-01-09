import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEconomicsBookComponent } from './home-economics-book.component';

describe('HomeEconomicsBookComponent', () => {
  let component: HomeEconomicsBookComponent;
  let fixture: ComponentFixture<HomeEconomicsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEconomicsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEconomicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
