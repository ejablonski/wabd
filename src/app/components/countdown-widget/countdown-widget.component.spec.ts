import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownWidgetComponent } from './countdown-widget.component';

describe('CountdownWidgetComponent', () => {
  let component: CountdownWidgetComponent;
  let fixture: ComponentFixture<CountdownWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
