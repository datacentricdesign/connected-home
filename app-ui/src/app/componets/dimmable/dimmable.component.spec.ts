import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmableComponent } from './dimmable.component';

describe('DimmableComponent', () => {
  let component: DimmableComponent;
  let fixture: ComponentFixture<DimmableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimmableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimmableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
