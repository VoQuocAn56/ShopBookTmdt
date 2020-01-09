import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTagCategoryComponent } from './menu-tag-category.component';

describe('MenuTagCategoryComponent', () => {
  let component: MenuTagCategoryComponent;
  let fixture: ComponentFixture<MenuTagCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTagCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTagCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
