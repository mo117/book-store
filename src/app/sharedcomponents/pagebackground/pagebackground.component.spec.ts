import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebackgroundComponent } from './pagebackground.component';

describe('PagebackgroundComponent', () => {
  let component: PagebackgroundComponent;
  let fixture: ComponentFixture<PagebackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagebackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
