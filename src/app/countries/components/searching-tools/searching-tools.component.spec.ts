import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingToolsComponent } from './searching-tools.component';

describe('SearchingToolsComponent', () => {
  let component: SearchingToolsComponent;
  let fixture: ComponentFixture<SearchingToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchingToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
