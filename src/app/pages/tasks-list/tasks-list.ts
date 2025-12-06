import { Component } from '@angular/core';
import { DataFetch } from '../../data-sharing/data-fetch';
import { Task } from '../../interface/task.model';

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
   tasksInitialData :Task[]= []
  constructor(private dataFetch : DataFetch){
    this.dataFetch.getData().subscribe(data => {
      this.tasksInitialData = data
    })
  }

  editTask(id: number | string) {
    console.log(id);
  }
  deleteTask(id: number | string) {
    console.log(id)
  }

  getOpacity(status: string) {
    return status === "Done" ? "0.45" : "1"
  }
}
