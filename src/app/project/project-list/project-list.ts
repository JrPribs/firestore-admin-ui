import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectListComponent {
  projects = signal([
    { id: '1', name: 'My First Project', connected: true, lastUsed: new Date() },
    { id: '2', name: 'Another Project', connected: false, lastUsed: new Date() },
  ]);
}