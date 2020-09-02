import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeViewComponent } from './enrollee-view.component';

describe('EnrolleeViewComponent', () => {
  let component: EnrolleeViewComponent;
  let fixture: ComponentFixture<EnrolleeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolleeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
