import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcodeComponent } from './checkcode.component';

describe('CheckcodeComponent', () => {
  let component: CheckcodeComponent;
  let fixture: ComponentFixture<CheckcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
