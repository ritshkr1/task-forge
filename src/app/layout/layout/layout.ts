import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainBody } from '../main-body/main-body';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, MainBody],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
