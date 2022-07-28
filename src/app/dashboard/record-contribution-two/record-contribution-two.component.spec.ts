import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordContributionTwoComponent } from './record-contribution-two.component';

describe('RecordContributionTwoComponent', () => {
  let component: RecordContributionTwoComponent;
  let fixture: ComponentFixture<RecordContributionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordContributionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordContributionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
