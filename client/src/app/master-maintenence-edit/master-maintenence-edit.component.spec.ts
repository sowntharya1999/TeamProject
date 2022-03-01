import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMaintenenceEditComponent } from './master-maintenence-edit.component';

describe('MasterMaintenenceEditComponent', () => {
  let component: MasterMaintenenceEditComponent;
  let fixture: ComponentFixture<MasterMaintenenceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterMaintenenceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMaintenenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
