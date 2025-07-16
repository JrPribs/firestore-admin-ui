import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'project-list',
    loadComponent: () => import('./project/project-list/project-list').then(m => m.ProjectListComponent)
  },
  {
    path: 'project-dialog',
    loadComponent: () => import('./project/project-dialog/project-dialog').then(m => m.ProjectDialogComponent)
  },
  {
    path: 'collection-viewer',
    loadComponent: () => import('./firestore/collection-viewer/collection-viewer').then(m => m.CollectionViewerComponent)
  },
  {
    path: 'query-panel',
    loadComponent: () => import('./firestore/query-panel/query-panel').then(m => m.QueryPanelComponent)
  },
  {
    path: 'auth-panel',
    loadComponent: () => import('./auth/auth-panel/auth-panel').then(m => m.AuthPanelComponent)
  },
  {
    path: 'settings-panel',
    loadComponent: () => import('./settings/settings-panel/settings-panel').then(m => m.SettingsPanelComponent)
  },
  { path: '', redirectTo: 'project-list', pathMatch: 'full' },
];