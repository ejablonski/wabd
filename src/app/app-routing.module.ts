import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { WidgetsContainerComponent } from './components/widgets-container/widgets-container.component';

const routes: Routes = [
  { path: "", component: WidgetsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
