import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoozeSearchComponent } from './booze-search.component';

describe('BoozeSearchComponent', () => {
  let component: BoozeSearchComponent;
  let fixture: ComponentFixture<BoozeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoozeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoozeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
