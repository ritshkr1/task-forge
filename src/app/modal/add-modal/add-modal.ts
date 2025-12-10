import { Component, input } from '@angular/core';
import { Task } from '../../interface/task.model';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-add-modal',
  imports: [FormsModule, DatePickerModule, SelectModule],
  templateUrl: './add-modal.html',
  styleUrl: './add-modal.css',
})
export class AddModal {
  task = input.required<any>();
}
