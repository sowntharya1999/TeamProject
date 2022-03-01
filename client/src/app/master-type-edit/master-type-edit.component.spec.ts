import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTypeEditComponent } from './master-type-edit.component';

describe('MasterTypeEditComponent', () => {
  let component: MasterTypeEditComponent;
  let fixture: ComponentFixture<MasterTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
