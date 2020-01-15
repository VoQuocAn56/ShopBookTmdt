import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureShortStoryBookComponent } from './literature-short-story-book.component';

describe('LiteratureShortStoryBookComponent', () => {
  let component: LiteratureShortStoryBookComponent;
  let fixture: ComponentFixture<LiteratureShortStoryBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteratureShortStoryBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureShortStoryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
