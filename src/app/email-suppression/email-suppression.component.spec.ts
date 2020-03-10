import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuppressionComponent } from './email-suppression.component';

describe('EmailSuppressionComponent', () => {
  let component: EmailSuppressionComponent;
  let fixture: ComponentFixture<EmailSuppressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSuppressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
