import { Component } from '@angular/core';
import { TASKS_DATA } from './tasksData';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  tableHead = [
    { key: 'Title', direction: '' },
    { key: 'Description', direction: '' },
    { key: 'Status', direction: '' },
    { key: 'Priority', direction: '' },
    { key: 'Deadline', direction: '' }
  ];

  tasksInitialData = [...TASKS_DATA];

  editTask(id: number) {
    console.log(id);
  }
  deleteTask(id: number) {
    console.log(id)
  }

  getOpacity(status: string) {
    return status === "Done" ? "0.45" : "1"
  }
}
