import { Component, input, output } from '@angular/core';
import { Task } from '../../interface/task.model';

@Component({
  selector: 'app-view-modal',
  imports: [],
  templateUrl: './view-modal.html',
  styleUrl: './view-modal.css',
})
export class ViewModal {
  task = input.required<Task | null>();
}
