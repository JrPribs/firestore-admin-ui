import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-query-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './query-panel.html',
  styleUrls: ['./query-panel.css']
})
export class QueryPanelComponent {
  collectionPath = signal('users');
  queryLimit = signal(10);
  results = signal<any[]>([]);

  runQuery() {
    // Mock query execution
    console.log(`Running query on ${this.collectionPath()} with limit ${this.queryLimit()}`);
    this.results.set([
      { id: 'doc1', field1: 'value1' },
      { id: 'doc2', field1: 'value2' },
    ]);
  }
}