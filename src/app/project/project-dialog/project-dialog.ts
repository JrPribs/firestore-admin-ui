import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-dialog.html',
  styleUrls: ['./project-dialog.css']
})
export class ProjectDialogComponent {
  projectName = signal('');
  projectId = signal('');
  apiKey = signal('');

  onSubmit() {
    console.log('Submitting project:', {
      name: this.projectName(),
      projectId: this.projectId(),
      apiKey: this.apiKey()
    });
    // In a real application, this would interact with a service to add the project
  }
}