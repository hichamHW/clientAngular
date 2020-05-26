import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingConferenceComponent } from './searching-conference.component';

describe('SearchingConferenceComponent', () => {
  let component: SearchingConferenceComponent;
  let fixture: ComponentFixture<SearchingConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
