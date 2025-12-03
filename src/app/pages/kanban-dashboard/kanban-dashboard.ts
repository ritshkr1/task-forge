import { Component } from '@angular/core';
import { DataFetch } from '../../data-sharing/data-fetch';
import { Task,KanbanColumns } from '../../interface/task.model';
import { Dragable } from '../../directives/dragable';
import { Dropzone } from '../../directives/dropzone';

type TabNameType = 'To-Do' | 'In-Progress' | 'Done';

@Component({
  selector: 'app-kanban-dashboard',
  imports: [Dragable,Dropzone],
  templateUrl: './kanban-dashboard.html',
  styleUrl: './kanban-dashboard.css',
})
export class KanbanDashboard {
  tabNames: TabNameType[] = ["To-Do", "In-Progress", "Done"];
  masterTasksList : Task[] = []
  tasksInitialData:KanbanColumns = {
  'To-Do': [],
  'In-Progress':[],
  'Done':[],
}
  constructor(private dataFetch : DataFetch){
      this.dataFetch.getData().subscribe(data => {
        this.masterTasksList = [...data];
        this.tasksInitialData = this.dataFetch.groupTasks(data);
        console.log(this.tasksInitialData)
      })
    }
  getTabData(tabName:'To-Do' | 'In-Progress' | 'Done'){
    let titleName = ""
  let classStyleName = ""
    if (tabName === "To-Do") {
        titleName = "To Do"
        
       
        classStyleName = "todo"
    } else if (tabName === "In-Progress") {
        titleName = "In Progress"
        classStyleName = "inprogress"
    } else {
        titleName = "Done"
        classStyleName = "done"
    }
  }

  // getColumnClass(){
  //   return `kanban-column ${dropZone === tabTitle ? 'kanban-column-dropzone' : ''} ${classStyleName}`
  // }

  callDropped(event:Task,tabName:TabNameType){
    console.log(tabName)
    const updatedTasks = this.masterTasksList.map((task) => {
            if (task.id === event.id) {
                return { ...task, status: tabName }
            } else {
                return { ...task }
            }
        });
    this.tasksInitialData = this.dataFetch.groupTasks(updatedTasks);
  }
  
}
