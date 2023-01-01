import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekProgramComponent } from './week-program.component';

describe('WeekProgramComponent', () => {
  let component: WeekProgramComponent;
  let fixture: ComponentFixture<WeekProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
