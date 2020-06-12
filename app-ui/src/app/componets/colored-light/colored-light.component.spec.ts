import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredLightComponent } from './colored-light.component';

describe('ColoredLightComponent', () => {
  let component: ColoredLightComponent;
  let fixture: ComponentFixture<ColoredLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
