import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent {
  private router = inject(Router);

  tabs = signal([
    { id: '1', title: 'Collection: users', route: '/collection-viewer' },
    { id: '2', title: 'Query: users where age > 21', route: '/query-panel' },
    { id: '3', title: 'Auth', route: '/auth-panel' }
  ]);

  activeTabId = signal('1');

  setActiveTab(tab: { id: string, route: string }) {
    this.activeTabId.set(tab.id);
    this.router.navigate([tab.route]);
  }

  closeTab(tabId: string) {
    this.tabs.update(currentTabs => currentTabs.filter(tab => tab.id !== tabId));
    // TODO: Handle closing the active tab and navigating to another one
  }
}
