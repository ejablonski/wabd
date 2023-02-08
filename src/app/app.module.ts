import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsContainerComponent } from './components/widgets-container/widgets-container.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsContainerComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
