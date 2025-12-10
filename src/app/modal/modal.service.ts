import { Injectable, signal, WritableSignal, inject } from '@angular/core';
import { ModalConfig } from './modal.interface';
import { TaskService } from '../data-sharing/task.service';
import { Task } from '../interface/task.model';

@Injectable({ providedIn: 'root' })
export class ModalStateService {
  // Single signal manages the open/close status, mode, and data
  private _modalConfig: WritableSignal<ModalConfig> = signal({
    mode: 'CLOSED',
    modalTitle: 'Closed Modal',
    primaryText: 'Submit',
    secondaryText: 'Close',
    data: null,
  });

  private taskService = inject(TaskService);

  // Public read-only signal
  readonly modalConfig = this._modalConfig.asReadonly();

  // --- Action Methods ---

  openAddModal(): void {
    this._modalConfig.set({
      mode: 'ADD',
      modalTitle: 'Add New',
      primaryText: 'Save',
      secondaryText: 'Close',
      data: {
        id: crypto.randomUUID(),
        title: '',
        description: '',
        status: 'To-Do',
        priority: 'Low',
        //             const today = new Date();
        // const formattedDate = today.toISOString().slice(0, 10);
        deadline: this.getCurrentDate(),
      }, // Use an empty object or form default values
    });
  }

  openEditModal(itemData: any): void {
    this._modalConfig.update(
      (curr) =>
        (curr = {
          mode: 'EDIT',
          modalTitle: 'Edit',
          primaryText: 'Update',
          secondaryText: 'Close',
          data: itemData, // Pass the specific item data to edit
        })
    );
  }

  openViewModal(itemData: any): void {
    this._modalConfig.set({
      mode: 'VIEW',
      modalTitle: 'View',
      primaryText: 'Edit',
      secondaryText: 'Close',
      data: itemData, // Pass the specific item data to view
    });
  }

  closeModal(): void {
    this._modalConfig.set({
      mode: 'CLOSED',
      modalTitle: 'Closed Modal',
      primaryText: 'Submit',
      secondaryText: 'Close',
      data: null,
    });
  }

  getCurrentDate() {
    const today = new Date();
    // Get the year (e.g., 2025)
    const year = today.getFullYear();
    // Get the month (0-indexed, so add 1) and pad with '0'
    const month = String(today.getMonth() + 1).padStart(2, '0');
    // Get the day of the month and pad with '0'
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  saveModalData() {
    const taskData: Task | null = this.modalConfig().data;

    if (taskData !== null) {
      if (this.modalConfig().mode === 'ADD') {
        this.closeModal();
        this.taskService.addNewTask(taskData);
      } else if (this.modalConfig().mode === 'EDIT') {
        this.closeModal();
        this.taskService.updateTask(taskData);
      } else if (this.modalConfig().mode === 'VIEW') {
        this.openEditModal(taskData);
      }
    } else {
      console.error('Cannot add task: Data is null.');
    }
  }
}
