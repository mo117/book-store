import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavrotieComponent } from './favrotie.component';

describe('FavrotieComponent', () => {
  let component: FavrotieComponent;
  let fixture: ComponentFixture<FavrotieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavrotieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavrotieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
