import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordContributionComponent } from './record-contribution.component';

describe('RecordContributionComponent', () => {
  let component: RecordContributionComponent;
  let fixture: ComponentFixture<RecordContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
