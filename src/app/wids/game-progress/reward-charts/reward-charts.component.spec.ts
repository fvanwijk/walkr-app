import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardChartsComponent } from './reward-charts.component';

describe('RewardChartsComponent', () => {
  let component: RewardChartsComponent;
  let fixture: ComponentFixture<RewardChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
