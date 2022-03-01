import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTypeMaintenenceComponent } from './master-type-maintenence.component';

describe('MasterTypeMaintenenceComponent', () => {
  let component: MasterTypeMaintenenceComponent;
  let fixture: ComponentFixture<MasterTypeMaintenenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTypeMaintenenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTypeMaintenenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
