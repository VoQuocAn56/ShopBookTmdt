import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLireratureBookComponent } from './detail-lirerature-book.component';

describe('DetailLireratureBookComponent', () => {
  let component: DetailLireratureBookComponent;
  let fixture: ComponentFixture<DetailLireratureBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLireratureBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLireratureBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
