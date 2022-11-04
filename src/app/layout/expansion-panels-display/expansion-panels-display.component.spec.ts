import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelsDisplayComponent } from './expansion-panels-display.component';

describe('ExpansionPanelsDisplayComponent', () => {
  let component: ExpansionPanelsDisplayComponent;
  let fixture: ComponentFixture<ExpansionPanelsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
