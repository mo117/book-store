import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePlisherComponent } from './profile-plisher.component';

describe('ProfilePlisherComponent', () => {
  let component: ProfilePlisherComponent;
  let fixture: ComponentFixture<ProfilePlisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePlisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePlisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
