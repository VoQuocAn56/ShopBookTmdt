import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHomeBannerComponent } from './sub-home-banner.component';

describe('SubHomeBannerComponent', () => {
  let component: SubHomeBannerComponent;
  let fixture: ComponentFixture<SubHomeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHomeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
