import { Component,output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-common-modal',
  imports: [FormsModule],
  templateUrl: './common-modal.html',
  styleUrl: './common-modal.css',
})
export class CommonModal {
  title ='Modal';
  primaryText = 'Submit';
  secondaryText = "Close";
  closeModalOutput = output();
  onSubmitModal = output();
  closeModal(event:Event){
    event.stopPropagation();
    this.closeModalOutput.emit();
  }
  submitModal(){
    console.log('submit function called');
    this.onSubmitModal.emit();
  }
}
