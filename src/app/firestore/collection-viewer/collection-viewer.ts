import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection-viewer.html',
  styleUrls: ['./collection-viewer.css']
})
export class CollectionViewerComponent {
  collectionName = signal('users');
  documents = signal([
    { id: 'user1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: 'user2', name: 'Jane Smith', email: 'jane.smith@example.com' },
  ]);
}