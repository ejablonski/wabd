import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsContainerComponent } from './components/widgets-container/widgets-container.component';
import { SettingsContainerComponent } from './components/settings-container/settings-container.component';
import { MessageWidgetComponent } from './components/message-widget/message-widget.component';
import { CountdownWidgetComponent } from './components/countdown-widget/countdown-widget.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { DidYouKnowWidgetComponent } from './components/did-you-know-widget/did-you-know-widget.component';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { EuAqiPipe } from './pipes/eu-aqi.pipe';
import { CountdownLeftPipe } from './pipes/countdown-left.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsContainerComponent,
    SettingsContainerComponent,
    MessageWidgetComponent,
    CountdownWidgetComponent,
    DidYouKnowWidgetComponent,
    WeatherWidgetComponent,
    TemperaturePipe,
    EuAqiPipe,
    CountdownLeftPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
