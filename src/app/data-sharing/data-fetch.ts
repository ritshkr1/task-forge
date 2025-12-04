import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS_DATA } from '../pages/tasks-list/tasksData';
import { Task,KanbanColumns,TabNameType } from '../interface/task.model';



@Injectable({
  providedIn: 'root',
})
export class DataFetch {
  getData():Observable<any>{
    const localData = localStorage.getItem('tasks');
    const parsedData: Task[] = localData ? JSON.parse(localData) : [...TASKS_DATA];
    return of([...parsedData])
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
    const updatedTasks = taskArray.map((task:Task) => ({
      ...task, // Keep all existing properties
      status: statusKey // 💥 Update the status property with the column key
    }));
    
    return updatedTasks; 
  });
  const stringifyTask = JSON.stringify(updatedFlatTasks)
  localStorage.setItem('tasks',stringifyTask)
}

}