import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionConfirmedComponent } from './contribution-confirmed.component';

describe('ContributionConfirmedComponent', () => {
  let component: ContributionConfirmedComponent;
  let fixture: ComponentFixture<ContributionConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
