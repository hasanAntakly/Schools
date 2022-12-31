import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotReadyComponent } from './dialog-not-ready.component';

describe('DialogNotReadyComponent', () => {
  let component: DialogNotReadyComponent;
  let fixture: ComponentFixture<DialogNotReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNotReadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNotReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
