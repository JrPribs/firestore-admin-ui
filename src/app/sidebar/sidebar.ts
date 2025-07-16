import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  private router = inject(Router);

  projects = signal([
    { id: '1', name: 'Project A', route: '/project-list' },
    { id: '2', name: 'Project B', route: '/collection-viewer' },
    { id: '3', name: 'Project C', route: '/auth-panel' }
  ]);

  activeProjectId = signal('1');

  setActiveProject(project: { id: string, route: string }) {
    this.activeProjectId.set(project.id);
    this.router.navigate([project.route]);
  }
}
