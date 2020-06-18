import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSensorComponent } from './light-sensor.component';

describe('LightSensorComponent', () => {
  let component: LightSensorComponent;
  let fixture: ComponentFixture<LightSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
