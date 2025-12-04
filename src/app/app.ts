import { Component, signal,Inject,Renderer2 } from '@angular/core';
import { Layout } from './layout/layout/layout';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-forge');
  theme = 'dark';
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    const body = this.document.body;
    this.renderer.addClass(body, this.theme);
  }

  handleToggleEvent(event:string){
    const body = this.document.body;

    if (this.theme) {
      this.renderer.removeClass(body, this.theme);
    }

    if (event) {
      this.renderer.addClass(body, event);
      this.theme = event;
    } else {
      this.theme = '';
    }
  }
}
