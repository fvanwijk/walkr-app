import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetUpgradeChartComponent } from './planet-upgrade-chart.component';

describe('PlanetUpgradeChartComponent', () => {
  let component: PlanetUpgradeChartComponent;
  let fixture: ComponentFixture<PlanetUpgradeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetUpgradeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetUpgradeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
