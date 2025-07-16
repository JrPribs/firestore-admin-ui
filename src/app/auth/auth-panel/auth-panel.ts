import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-panel.html',
  styleUrls: ['./auth-panel.css']
})
export class AuthPanelComponent {
  users = signal([
    { uid: 'user1', email: 'john.doe@example.com', displayName: 'John Doe' },
    { uid: 'user2', email: 'jane.smith@example.com', displayName: 'Jane Smith' },
  ]);
}