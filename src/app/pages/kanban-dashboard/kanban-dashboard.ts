import { Component, WritableSignal, signal, inject } from '@angular/core';
import { TaskService } from '../../data-sharing/task.service';
import { Task } from '../../interface/task.model';
import { TabNameType } from '../../interface/task.model';
import { SkeletonModule } from 'primeng/skeleton';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { ModalStateService } from '../../modal/modal.service';

@Component({
  selector: 'app-kanban-dashboard',
  imports: [CdkDrag, CdkDropList, CdkDropListGroup, FontAwesomeModule, FormsModule, SkeletonModule],
  templateUrl: './kanban-dashboard.html',
  styleUrl: './kanban-dashboard.css',
})
export class KanbanDashboard {
  isLoading = true;
  private modalState = inject(ModalStateService);
  faPlus = faPlus;
  tabNames: TabNameType[] = ['To-Do', 'In-Progress', 'Done'];
  isNewTaskTitleOpen = {
    'To-Do': false,
    'In-Progress': false,
    Done: false,
  };
  newTaskTitle = {
    'To-Do': '',
    'In-Progress': '',
    Done: '',
  };
  tasksInitialData: WritableSignal<any> = signal({
    'To-Do': [],
    'In-Progress': [],
    Done: [],
  });
  constructor(private taskService: TaskService) {
    this.getTasksData();
  }

  getTasksData() {
    const groupedTasks = this.taskService.groupTasks(this.taskService.localTasks());
    this.tasksInitialData.set(groupedTasks);
  }
  handleQuickTask(tabName: TabNameType) {
    if (this.newTaskTitle[tabName]) {
      const newDate = new Date().toLocaleDateString('en-GB');
      const newTask = {
        title: this.newTaskTitle[tabName],
        status: tabName,
        description: 'Quick Description',
        priority: 'Low',
        id: crypto.randomUUID(),
        deadline: newDate,
      };
      this.tasksInitialData()[tabName] = [...this.tasksInitialData()[tabName], newTask];
    }
    this.newTaskTitle[tabName] = '';
    this.isNewTaskTitleOpen[tabName] = false;
  }
  handleOpenQuick(tabName: TabNameType) {
    this.isNewTaskTitleOpen[tabName] = true;
  }

  handleClickEvent(task: Task) {
    this.modalState.openViewModal(task);
  }

  handleDragAndDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.taskService.updateTasksLocal(this.tasksInitialData());
  }
}
