import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidYouKnowWidgetComponent } from './did-you-know-widget.component';

describe('DidYouKnowWidgetComponent', () => {
  let component: DidYouKnowWidgetComponent;
  let fixture: ComponentFixture<DidYouKnowWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidYouKnowWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidYouKnowWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
