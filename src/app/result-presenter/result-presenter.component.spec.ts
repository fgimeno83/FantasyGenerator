import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPresenterComponent } from './result-presenter.component';

describe('ResultPresenterComponent', () => {
  let component: ResultPresenterComponent;
  let fixture: ComponentFixture<ResultPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
