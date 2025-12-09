import { Component ,WritableSignal,signal} from '@angular/core';
import { DataFetch } from '../../data-sharing/data-fetch';
import { Task } from '../../interface/task.model';
import { TabNameType } from '../../interface/task.model';
import {CdkDrag, CdkDragDrop, CdkDropList,CdkDropListGroup, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-kanban-dashboard',
  imports: [CdkDrag,CdkDropList,CdkDropListGroup,FontAwesomeModule,FormsModule],
  templateUrl: './kanban-dashboard.html',
  styleUrl: './kanban-dashboard.css',
})
export class KanbanDashboard {
  faPlus = faPlus;
  tabNames: TabNameType[] = ["To-Do", "In-Progress", "Done"];
  isNewTaskTitleOpen = {
  'To-Do':false,
  'In-Progress':false,
  'Done':false,
}
  newTaskTitle = {
  'To-Do':'',
  'In-Progress':'',
  'Done':'',
}
  tasksInitialData:WritableSignal<any> = signal({
  'To-Do': [],
  'In-Progress':[],
  'Done':[],
})
  constructor(private dataFetch : DataFetch){
    this.getTasksData();
    }


  getTasksData(){
    const groupedTasks = this.dataFetch.groupTasks(this.dataFetch.localTasks())
    this.tasksInitialData.set(groupedTasks)
    
  }
  handleQuickTask(tabName: TabNameType){
    if(this.newTaskTitle[tabName]){
      const newDate = new Date().toLocaleDateString('en-GB');
      const newTask = {title: this.newTaskTitle[tabName],
        status: tabName,
        description: "Quick Description",
        priority: 'Low',
        id: crypto.randomUUID(),
        deadline: newDate,}
      this.tasksInitialData()[tabName] = [...this.tasksInitialData()[tabName],newTask];
    }
    this.newTaskTitle[tabName] = ''; 
      this.isNewTaskTitleOpen[tabName] = false;
  }
  handleOpenQuick(tabName:TabNameType){
    this.isNewTaskTitleOpen[tabName] = true
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
    this.dataFetch.updateTasksLocal(this.tasksInitialData());
  }
}
