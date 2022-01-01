import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStickyNavigationComponent } from './top-sticky-navigation.component';

describe('TopStickyNavigationComponent', () => {
  let component: TopStickyNavigationComponent;
  let fixture: ComponentFixture<TopStickyNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStickyNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStickyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
