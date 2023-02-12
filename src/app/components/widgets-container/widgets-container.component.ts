import {
  Component
} from '@angular/core';

import { SettingsService } from 'src/app/services/settings.service';

/**
 * This component is a widgets displaying container. Widgets (with a exception
 * for a mandatory Weather widget) can be user selected and are stored in an
 * array of Widget objects.
 */
@Component({
  selector: 'app-widget-container',
  templateUrl: './widgets-container.component.html',
  styleUrls: ['./widgets-container.component.scss']
})
export class WidgetsContainerComponent {
  constructor(public settingsService: SettingsService) {}
}
