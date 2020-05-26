import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayConferenceComponent } from './pay-conference.component';

describe('PayConferenceComponent', () => {
  let component: PayConferenceComponent;
  let fixture: ComponentFixture<PayConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
