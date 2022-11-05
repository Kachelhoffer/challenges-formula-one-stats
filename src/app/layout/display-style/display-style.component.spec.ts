import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStyleComponent } from './display-style.component';

describe('DisplayStyleComponent', () => {
  let component: DisplayStyleComponent;
  let fixture: ComponentFixture<DisplayStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
