import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalStateService } from '../modal.service';
import { ViewModal } from '../view-modal/view-modal';
import { AddModal } from '../add-modal/add-modal';

@Component({
  selector: 'app-common-modal',
  imports: [FormsModule, ViewModal, AddModal],
  templateUrl: './common-modal.html',
  styleUrl: './common-modal.css',
})
export class CommonModal {
  modalService = inject(ModalStateService);
  closeModal(event: Event) {
    event.stopPropagation();
    this.modalService.closeModal();
  }
  submitModal() {
    this.modalService.saveModalData();
  }
}
