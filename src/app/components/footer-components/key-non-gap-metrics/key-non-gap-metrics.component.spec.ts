import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyNonGapMetricsComponent } from './key-non-gap-metrics.component';

describe('KeyNonGapMetricsComponent', () => {
  let component: KeyNonGapMetricsComponent;
  let fixture: ComponentFixture<KeyNonGapMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyNonGapMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyNonGapMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
