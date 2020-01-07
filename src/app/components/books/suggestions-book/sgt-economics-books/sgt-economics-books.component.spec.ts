import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgtEconomicsBooksComponent } from './sgt-economics-books.component';

describe('SgtEconomicsBooksComponent', () => {
  let component: SgtEconomicsBooksComponent;
  let fixture: ComponentFixture<SgtEconomicsBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgtEconomicsBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgtEconomicsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
