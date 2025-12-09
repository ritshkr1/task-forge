import { Injectable,signal,WritableSignal,computed} from '@angular/core';
// import { Observable, of } from 'rxjs';
import { TASKS_DATA } from '../pages/tasks-list/tasksData';
import { Task,KanbanColumns,TabNameType } from '../interface/task.model';



@Injectable({
  providedIn: 'root',
})
export class DataFetch {
  localTasks: WritableSignal<Task[]> = signal<Task[]>(this.getIntialData());

  getIntialData(){
    const localData = localStorage.getItem('tasks');
    let parsedData: Task[] = [...TASKS_DATA]
    if(localData){
      parsedData = JSON.parse(localData);
    }else{
      this.setTasksLocal(parsedData);
    }
    return parsedData;
  }
  // getData():Observable<any>{
  //   return of([...this.localTasks()])
  // }

  setTasksLocal(Tasks:Task[]){
    const stringifyTask = JSON.stringify(Tasks)
    localStorage.setItem('tasks',stringifyTask);
  }

  addNewTask(Task:Task){
    const localData = localStorage.getItem('tasks');
    const parsedData: Task[] = localData ? JSON.parse(localData) : [];
    const newTasksArray = [Task,...parsedData];
    this.localTasks.set(newTasksArray)
    this.setTasksLocal(newTasksArray);
  }
  groupTasks(Tasks: Task[]): KanbanColumns {
  // Use the reduce method to iterate over the array only once
  const groupedTasks = Tasks.reduce((acc, task) => {
    // Determine which column (key) the task belongs to
    const columnKey = task.status;

    // Check if the key is valid and exists in the accumulator
    if (acc.hasOwnProperty(columnKey)) {
      acc[columnKey].push(task);
    }
    // Note: You could add an 'else' here to handle tasks with unknown statuses

    // Return the accumulator for the next iteration
    return acc;

  }, {
    // Initial value for the accumulator (acc)
    'To-Do': [],
    'In-Progress': [],
    'Done': [],
    
  } as KanbanColumns); // Assert the initial value type

  return groupedTasks;
}


updateTasksLocal(tasks:KanbanColumns){
  const updatedFlatTasks= Object.entries(tasks)
  .flatMap(([statusKey, taskArray]) => {
    const updatedTasks:Task[] = taskArray.map((task:Task) => ({
      ...task, // Keep all existing properties
      status: statusKey // 💥 Update the status property with the column key
    }));
    
    return updatedTasks; 
  });
  this.localTasks.set(updatedFlatTasks)
  const stringifyTask = JSON.stringify(updatedFlatTasks)
  localStorage.setItem('tasks',stringifyTask)
}

updateTask(editedTask:Task){
  const updatedTasks = this.localTasks().map((task) => {
    if(task.id === editedTask.id){
      return editedTask
    }
    return task;
  })
  this.localTasks.set(updatedTasks);
  this.setTasksLocal(updatedTasks);
}
deleteTask(id:number | string){
  const alteredTasks = this.localTasks().filter((task) => task.id !== id);

  this.localTasks.set(alteredTasks);
  this.setTasksLocal(alteredTasks)
}
}