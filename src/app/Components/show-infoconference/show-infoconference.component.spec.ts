import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoconferenceComponent } from './show-infoconference.component';

describe('ShowInfoconferenceComponent', () => {
  let component: ShowInfoconferenceComponent;
  let fixture: ComponentFixture<ShowInfoconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInfoconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
