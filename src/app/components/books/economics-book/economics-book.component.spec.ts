import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsBookComponent } from './economics-book.component';

describe('EconomicsBookComponent', () => {
  let component: EconomicsBookComponent;
  let fixture: ComponentFixture<EconomicsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
