import { Component,output } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainBody } from '../main-body/main-body';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye as solidEye} from '@fortawesome/free-solid-svg-icons';
// import {faEye as regularEye} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, MainBody,FontAwesomeModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  solidEye = solidEye;
  // regularEye = regularEye;
  themeToggle = output<string>();
  theme = 'dark';
  toggleTheme(){
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeToggle.emit(this.theme);
  }
}
