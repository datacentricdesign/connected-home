import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionSensorComponent } from './motion-sensor.component';

describe('MotionSensorComponent', () => {
  let component: MotionSensorComponent;
  let fixture: ComponentFixture<MotionSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
