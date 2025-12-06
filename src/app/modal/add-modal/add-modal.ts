import { Component,output} from '@angular/core';
import { CommonModal } from '../common-modal/common-modal';
import { Task } from '../../interface/task.model';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-add-modal',
  imports: [CommonModal,FormsModule,DatePickerModule],
  templateUrl: './add-modal.html',
  styleUrl: './add-modal.css',
})
export class AddModal {
  newTask :Task ={
    id: crypto.randomUUID(),
            title: "",
            description: "",
            status: "To-Do",
            priority: "Low",
            deadline: "",
  }
 closeModalOutput = output();
 onSubmitForm = output();

 handleOnCloseAddModal(){
  this.closeModalOutput.emit();
 }

 handleOnSubmit(){
  this.onSubmitForm.emit();
 }
}
