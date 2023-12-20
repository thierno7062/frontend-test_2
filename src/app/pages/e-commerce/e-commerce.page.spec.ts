import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECommercePage } from './e-commerce.page';

describe('ECommercePage', () => {
  let component: ECommercePage;
  let fixture: ComponentFixture<ECommercePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ECommercePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
