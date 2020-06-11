import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoardContainerComponent } from './hoard-container.component';

describe('HoardContainerComponent', () => {
  let component: HoardContainerComponent;
  let fixture: ComponentFixture<HoardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
