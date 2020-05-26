import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllconferenceComponent } from './show-allconference.component';

describe('ShowAllconferenceComponent', () => {
  let component: ShowAllconferenceComponent;
  let fixture: ComponentFixture<ShowAllconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
