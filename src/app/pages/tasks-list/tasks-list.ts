import { Component,output,WritableSignal,signal} from '@angular/core';
import { DataFetch } from '../../data-sharing/data-fetch';
import { Task } from '../../interface/task.model';
import { AddModal } from '../../modal/add-modal/add-modal';

@Component({
  selector: 'app-tasks-list',
  imports: [AddModal],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList{
  isEditModal = signal(false)
  selectedTask = signal<Task | null>(null)
  tableHead = [
    { key: 'Title', direction: '' },
    { key: 'Description', direction: '' },
    { key: 'Status', direction: '' },
    { key: 'Priority', direction: '' },
    { key: 'Deadline', direction: '' }
  ];
  callEditTask = output<number | string>();
  callDeleteTask = output<number | string>();
   tasksInitialData :WritableSignal<Task[]> = signal([])
  constructor(public dataFetch : DataFetch){
    // this.dataFetch.getData().subscribe(data => {
    //   this.tasksInitialData = data
    // })
    
  }
  handleModal(){
    this.isEditModal.update( curr => !curr);
  }
  saveNewTask(event:Task){
    this.isEditModal.update( curr => !curr);
    this.dataFetch.updateTask(event)
  }
  editTask(Task:Task) {
    this.selectedTask.set(Task)
    this.isEditModal.update( curr => !curr);
  }
  deleteTask(id: number | string) {
    this.dataFetch.deleteTask(id)
  }

  getOpacity(status: string) {
    return status === "Done" ? "0.45" : "1"
  }
}
