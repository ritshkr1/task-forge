import { Component,output,inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainBody } from '../main-body/main-body';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye as solidEye} from '@fortawesome/free-solid-svg-icons';
import { CommonModal } from '../../modal/common-modal/common-modal';
import { ModalStateService } from '../../modal/modal.service';
// import {faEye as regularEye} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, MainBody, FontAwesomeModule, CommonModal],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  public modalState = inject(ModalStateService);
  solidEye = solidEye;
  // regularEye = regularEye;
  themeToggle = output<string>();
  theme = 'dark';
  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeToggle.emit(this.theme);
  }

  handleModal() {
    this.modalState.openAddModal();
  }
}
