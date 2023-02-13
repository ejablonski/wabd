import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/widgets-container.module').then(m=> m.WidgetsContainerModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings-container.module').then(m => m.SettingsContainerModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
