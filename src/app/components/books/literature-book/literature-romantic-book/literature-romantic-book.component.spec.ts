import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureRomanticBookComponent } from './literature-romantic-book.component';

describe('LiteratureRomanticBookComponent', () => {
  let component: LiteratureRomanticBookComponent;
  let fixture: ComponentFixture<LiteratureRomanticBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteratureRomanticBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureRomanticBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
