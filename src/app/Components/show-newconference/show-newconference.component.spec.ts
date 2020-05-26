import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewconferenceComponent } from './show-newconference.component';

describe('ShowNewconferenceComponent', () => {
  let component: ShowNewconferenceComponent;
  let fixture: ComponentFixture<ShowNewconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
