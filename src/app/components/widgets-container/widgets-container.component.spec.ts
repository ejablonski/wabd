import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { WidgetsContainerComponent } from './widgets-container.component';

describe('WidgetContainerComponent', () => {
  let component: WidgetsContainerComponent;
  let fixture: ComponentFixture<WidgetsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('widgets array is not empty', () => {
    expect(component.widgets.length != 0).toBeTruthy();
  });

  // it('widgets array contains Weather widget', () => {
  //   expect(component.widgets.find(obj => obj instanceof WeatherWidgetComponent)).toBeTruthy();
  // });

  it('widgets array contains only one Weather widget', () => {
    let results: number = 0

    component.widgets
    .map(
      (obj) => {
        if(obj instanceof WeatherWidgetComponent) {
          results++
        }
      }
    )

    expect(results === 1).toBeTrue();
  });
});
