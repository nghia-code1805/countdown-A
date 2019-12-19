import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownAComponent } from './countdown-a.component';

describe('CountdownAComponent', () => {
  let component: CountdownAComponent;
  let fixture: ComponentFixture<CountdownAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
