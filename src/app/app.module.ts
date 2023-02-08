import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsContainerComponent } from './components/widgets-container/widgets-container.component';
import { SettingsContainerComponent } from './components/settings-container/settings-container.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsContainerComponent,
    SettingsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
