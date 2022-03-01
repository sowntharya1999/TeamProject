import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMaintenenceComponent } from './user-maintenence.component';

describe('UserMaintenenceComponent', () => {
  let component: UserMaintenenceComponent;
  let fixture: ComponentFixture<UserMaintenenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMaintenenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMaintenenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
