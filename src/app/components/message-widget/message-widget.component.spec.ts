import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWidgetComponent } from './message-widget.component';

describe('MessageWidgetComponent', () => {
  let component: MessageWidgetComponent;
  let fixture: ComponentFixture<MessageWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
