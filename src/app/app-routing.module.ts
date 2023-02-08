import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { SettingsContainerComponent } from './components/settings-container/settings-container.component';
import { WidgetsContainerComponent } from './components/widgets-container/widgets-container.component';

const routes: Routes = [
  { path: '', component: WidgetsContainerComponent },
  { path: 'settings', component: SettingsContainerComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
