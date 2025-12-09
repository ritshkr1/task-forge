import { Component,output,input, OnInit} from '@angular/core';
import { CommonModal } from '../common-modal/common-modal';
import { Task } from '../../interface/task.model';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-add-modal',
  imports: [CommonModal,FormsModule,DatePickerModule,SelectModule],
  templateUrl: './add-modal.html',
  styleUrl: './add-modal.css',
})
export class AddModal implements OnInit {
  selectedTask = input<any>()
  newTask :Task ={
    id: crypto.randomUUID(),
            title: "",
            description: "",
            status: "To-Do",
            priority: "Low",
            deadline: "",
  }
  ngOnInit(){
    if(this.selectedTask()){
      this.newTask = this.selectedTask();
      console.log(this.newTask)
    }
  }
 closeModalOutput = output();
 priorityOptions =[ 'High', 'Medium' , 'Low']
 onSubmitForm = output<Task>();

 handleOnCloseAddModal(){
  this.closeModalOutput.emit();
 }
 onDatePanelClose(event:HTMLElement){
  console.log(event)
 }

 handleOnSubmit(){
  this.onSubmitForm.emit(this.newTask);
 }
}
