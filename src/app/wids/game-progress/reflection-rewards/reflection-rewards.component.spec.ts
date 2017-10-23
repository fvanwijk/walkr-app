import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRewardsComponent } from './reflection-rewards.component';

describe('ReflectionRewardsComponent', () => {
  let component: ReflectionRewardsComponent;
  let fixture: ComponentFixture<ReflectionRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectionRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
