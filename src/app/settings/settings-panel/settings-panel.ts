import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-panel.html',
  styleUrls: ['./settings-panel.css']
})
export class SettingsPanelComponent {
  appSettings = signal({
    theme: 'dark',
    defaultLimit: 50,
  });

  projectSettings = signal({
    projectId: 'my-firebase-project',
    region: 'us-central1',
  });
}