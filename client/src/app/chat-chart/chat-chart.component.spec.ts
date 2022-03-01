import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChartComponent } from './chat-chart.component';

describe('ChatChartComponent', () => {
  let component: ChatChartComponent;
  let fixture: ComponentFixture<ChatChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
