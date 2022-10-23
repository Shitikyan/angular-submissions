import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCardComponent } from './submission-card.component';

describe('CardComponent', () => {
  let component: SubmissionCardComponent;
  let fixture: ComponentFixture<SubmissionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
