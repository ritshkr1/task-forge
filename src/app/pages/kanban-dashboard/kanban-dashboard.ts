import { Component } from '@angular/core';
import { DataFetch } from '../../data-sharing/data-fetch';
import { Task,KanbanColumns } from '../../interface/task.model';

type TabNameType = 'To-Do' | 'In-Progress' | 'Done';

@Component({
  selector: 'app-kanban-dashboard',
  imports: [],
  templateUrl: './kanban-dashboard.html',
  styleUrl: './kanban-dashboard.css',
})
export class KanbanDashboard {
  tabNames: TabNameType[] = ["To-Do", "In-Progress", "Done"];
  tasksInitialData:KanbanColumns = {
  'To-Do': [],
  'In-Progress':[],
  'Done':[],
}
  inprogressList:Task[] = []
  doneList :Task[] = []
  constructor(private dataFetch : DataFetch){
      this.dataFetch.getData().subscribe(data => {
      
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
  
}
