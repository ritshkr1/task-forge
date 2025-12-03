import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBody } from './main-body';

describe('MainBody', () => {
  let component: MainBody;
  let fixture: ComponentFixture<MainBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
