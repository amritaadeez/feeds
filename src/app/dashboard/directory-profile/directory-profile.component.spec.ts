import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryProfileComponent } from './directory-profile.component';

describe('DirectoryProfileComponent', () => {
  let component: DirectoryProfileComponent;
  let fixture: ComponentFixture<DirectoryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
