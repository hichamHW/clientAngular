import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailConfrerenceComponent } from './show-detail-confrerence.component';

describe('ShowDetailConfrerenceComponent', () => {
  let component: ShowDetailConfrerenceComponent;
  let fixture: ComponentFixture<ShowDetailConfrerenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailConfrerenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailConfrerenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
