import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock1Component } from './mock1.component';

describe('Mock1Component', () => {
  let component: Mock1Component;
  let fixture: ComponentFixture<Mock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mock1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
