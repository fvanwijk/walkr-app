import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanetsComponent } from './my-planets.component';

describe('MyPlanetsComponent', () => {
  let component: MyPlanetsComponent;
  let fixture: ComponentFixture<MyPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
