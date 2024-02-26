import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFetcherComponent } from './countries-fetcher.component';

describe('CountriesFetcherComponent', () => {
  let component: CountriesFetcherComponent;
  let fixture: ComponentFixture<CountriesFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesFetcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
