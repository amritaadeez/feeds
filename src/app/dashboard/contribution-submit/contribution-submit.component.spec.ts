import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionSubmitComponent } from './contribution-submit.component';

describe('ContributionSubmitComponent', () => {
  let component: ContributionSubmitComponent;
  let fixture: ComponentFixture<ContributionSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
