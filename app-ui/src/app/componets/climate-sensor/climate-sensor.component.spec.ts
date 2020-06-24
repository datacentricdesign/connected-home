import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateSensorComponent } from './climate-sensor.component';

describe('ClimateSensorComponent', () => {
  let component: ClimateSensorComponent;
  let fixture: ComponentFixture<ClimateSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
