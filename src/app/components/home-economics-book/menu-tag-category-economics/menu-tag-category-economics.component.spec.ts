import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTagCategoryEconomicsComponent } from './menu-tag-category-economics.component';

describe('MenuTagCategoryEconomicsComponent', () => {
  let component: MenuTagCategoryEconomicsComponent;
  let fixture: ComponentFixture<MenuTagCategoryEconomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTagCategoryEconomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTagCategoryEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
