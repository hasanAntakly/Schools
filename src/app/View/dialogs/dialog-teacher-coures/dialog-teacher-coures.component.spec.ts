import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTeacherCouresComponent } from './dialog-teacher-coures.component';

describe('DialogTeacherCouresComponent', () => {
  let component: DialogTeacherCouresComponent;
  let fixture: ComponentFixture<DialogTeacherCouresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTeacherCouresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTeacherCouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
