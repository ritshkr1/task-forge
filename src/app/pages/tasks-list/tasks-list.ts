import { Component, output, WritableSignal, signal, inject } from '@angular/core';
import { TaskService } from '../../data-sharing/task.service';
import { Task } from '../../interface/task.model';
import { SortButton } from '../../components/sort-button';
import { ModalStateService } from '../../modal/modal.service';

@Component({
  selector: 'app-tasks-list',
  imports: [SortButton],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  private modalState = inject(ModalStateService);
  tableHead = [
    { key: 'Title', direction: '' },
    { key: 'Description', direction: '' },
    { key: 'Status', direction: '' },
    { key: 'Priority', direction: '' },
    { key: 'Deadline', direction: '' },
  ];
  callEditTask = output<number | string>();
  callDeleteTask = output<number | string>();
  tasksInitialData: WritableSignal<Task[]> = signal([]);
  constructor(public taskService: TaskService) {
    // this.dataFetch.getData().subscribe(data => {
    //   this.tasksInitialData = data
    // })
  }
  handleModal() {}
  saveNewTask(event: Task) {
    this.taskService.updateTask(event);
  }
  editTask(Task: Task) {
    this.modalState.openEditModal(Task);
  }
  deleteTask(id: number | string) {
    this.taskService.deleteTask(id);
  }

  getOpacity(status: string) {
    return status === 'Done' ? '0.45' : '1';
  }

  handleTableSort(head: any) {
    const sortNextDirection = head.direction === 'asc' ? 'desc' : 'asc';
    const activeSort: { key: keyof Task; direction: string } = {
      key: head.key.toLowerCase(),
      direction: sortNextDirection,
    };
    const updatedTableHeadItems = this.tableHead.map((config) => {
      if (config.key === head.key) {
        return { key: head.key, direction: sortNextDirection };
      } else {
        return { key: config.key, direction: '' };
      }
    });

    this.tableHead = updatedTableHeadItems;
    this.taskService.handleSort(activeSort.key, activeSort.direction);
  }
}
