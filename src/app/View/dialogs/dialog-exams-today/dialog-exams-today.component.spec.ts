import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExamsTodayComponent } from './dialog-exams-today.component';

describe('DialogExamsTodayComponent', () => {
  let component: DialogExamsTodayComponent;
  let fixture: ComponentFixture<DialogExamsTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExamsTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExamsTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
