import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanDashboard } from './kanban-dashboard';

describe('KanbanDashboard', () => {
  let component: KanbanDashboard;
  let fixture: ComponentFixture<KanbanDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
