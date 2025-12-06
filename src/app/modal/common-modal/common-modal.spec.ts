import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModal } from './common-modal';

describe('CommonModal', () => {
  let component: CommonModal;
  let fixture: ComponentFixture<CommonModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
