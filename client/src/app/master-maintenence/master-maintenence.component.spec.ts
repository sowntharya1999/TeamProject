import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMaintenenceComponent } from './master-maintenence.component';

describe('MasterMaintenenceComponent', () => {
  let component: MasterMaintenenceComponent;
  let fixture: ComponentFixture<MasterMaintenenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterMaintenenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMaintenenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
