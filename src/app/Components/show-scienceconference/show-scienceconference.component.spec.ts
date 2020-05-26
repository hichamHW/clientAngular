import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScienceconferenceComponent } from './show-scienceconference.component';

describe('ShowScienceconferenceComponent', () => {
  let component: ShowScienceconferenceComponent;
  let fixture: ComponentFixture<ShowScienceconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowScienceconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScienceconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
