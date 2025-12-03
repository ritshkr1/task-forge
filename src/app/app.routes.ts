import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
},
{
    path: 'tasks',
    loadComponent: () => import('./pages/tasks-list/tasks-list').then(m => m.TasksList)
},
{
    path: 'kanban',
    loadComponent: () => import('./pages/kanban-dashboard/kanban-dashboard').then(m => m.KanbanDashboard)
}];