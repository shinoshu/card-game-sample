import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitOrStandComponent } from './hit-or-stand.component';

describe('HitOrStandComponent', () => {
  let component: HitOrStandComponent;
  let fixture: ComponentFixture<HitOrStandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitOrStandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitOrStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
