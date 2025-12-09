import { Component,output,inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainBody } from '../main-body/main-body';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye as solidEye} from '@fortawesome/free-solid-svg-icons';
import { AddModal } from '../../modal/add-modal/add-modal';
import { Task } from '../../interface/task.model';
import { DataFetch } from '../../data-sharing/data-fetch';
// import {faEye as regularEye} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, MainBody,FontAwesomeModule,AddModal],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isModalOpen = false;
  private DataService = inject(DataFetch);
  solidEye = solidEye;
  // regularEye = regularEye;
  themeToggle = output<string>();
  theme = 'dark';
  toggleTheme(){
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeToggle.emit(this.theme);
  }

  handleModal(){
    this.isModalOpen = !this.isModalOpen;
    console.log(this.isModalOpen)
  }

  saveNewTask(event:Task){
    this.DataService.addNewTask(event);
    this.isModalOpen = !this.isModalOpen
  }
}
