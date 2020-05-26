import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeConferenceComponent } from './free-conference.component';

describe('FreeConferenceComponent', () => {
  let component: FreeConferenceComponent;
  let fixture: ComponentFixture<FreeConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
