import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { WeatherWidgetModule } from './weather-widget.module';

import { WidgetsContainerComponent } from '../components/widgets-container/widgets-container.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsContainerComponent,
    loadChildren: () => import('./weather-widget.module').then(m=> m.WeatherWidgetModule)
  }
];

@NgModule({
  declarations: [
    WidgetsContainerComponent
  ],
  imports: [
    CommonModule,
    WeatherWidgetModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WidgetsContainerModule { }
