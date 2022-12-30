import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpenGroupsComponent } from './dialog-open-groups.component';

describe('DialogOpenGroupsComponent', () => {
  let component: DialogOpenGroupsComponent;
  let fixture: ComponentFixture<DialogOpenGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpenGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOpenGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
