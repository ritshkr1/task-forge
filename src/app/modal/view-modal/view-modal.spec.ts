import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModal } from './view-modal';

describe('ViewModal', () => {
  let component: ViewModal;
  let fixture: ComponentFixture<ViewModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
