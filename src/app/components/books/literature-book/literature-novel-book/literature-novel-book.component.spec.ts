import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureNovelBookComponent } from './literature-novel-book.component';

describe('LiteratureNovelBookComponent', () => {
  let component: LiteratureNovelBookComponent;
  let fixture: ComponentFixture<LiteratureNovelBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteratureNovelBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureNovelBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
