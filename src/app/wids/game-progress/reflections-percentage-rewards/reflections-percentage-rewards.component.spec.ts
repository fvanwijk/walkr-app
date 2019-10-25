import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionsPercentageRewardsComponent } from './reflections-percentage-rewards.component';

describe('ReflectionsPercentageRewardsComponent', () => {
  let component: ReflectionsPercentageRewardsComponent;
  let fixture: ComponentFixture<ReflectionsPercentageRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectionsPercentageRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionsPercentageRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
