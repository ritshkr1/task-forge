import { Component } from '@angular/core';
import { DataFetch } from '../../data-sharing/data-fetch';
import { Task,KanbanColumns } from '../../interface/task.model';
import { TabNameType } from '../../interface/task.model';
import {CdkDrag, CdkDragDrop, CdkDropList,CdkDropListGroup, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanban-dashboard',
  imports: [CdkDrag,CdkDropList,CdkDropListGroup],
  templateUrl: './kanban-dashboard.html',
  styleUrl: './kanban-dashboard.css',
})
export class KanbanDashboard {
  tabNames: TabNameType[] = ["To-Do", "In-Progress", "Done"];
  kanbanColumnClass = 'kanban-column kanban-column-dropzone'
  masterTasksList : Task[] = []
  tasksInitialData:any = {
  'To-Do': [],
  'In-Progress':[],
  'Done':[],
}
  constructor(private dataFetch : DataFetch){
    this.getTasksData();
    }


  getTasksData(){
    this.dataFetch.getData().subscribe(data => {
        this.masterTasksList = [...data];
        this.tasksInitialData = this.dataFetch.groupTasks(data);
      })
  }
  


  handleDragAndDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.dataFetch.updateTasksLocal(this.tasksInitialData);
  }
}
