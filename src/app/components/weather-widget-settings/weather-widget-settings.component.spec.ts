import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetSettingsComponent } from './weather-widget-settings.component';

describe('WeatherWidgetSettingsComponent', () => {
  let component: WeatherWidgetSettingsComponent;
  let fixture: ComponentFixture<WeatherWidgetSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWidgetSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWidgetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
