import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureLightNovelBookComponent } from './literature-light-novel-book.component';

describe('LiteratureLightNovelBookComponent', () => {
  let component: LiteratureLightNovelBookComponent;
  let fixture: ComponentFixture<LiteratureLightNovelBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteratureLightNovelBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureLightNovelBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
