import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLiteratureBookComponent } from './home-literature-book.component';

describe('HomeLiteratureBookComponent', () => {
  let component: HomeLiteratureBookComponent;
  let fixture: ComponentFixture<HomeLiteratureBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLiteratureBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLiteratureBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
