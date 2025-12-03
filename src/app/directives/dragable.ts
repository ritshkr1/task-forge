import { Directive,HostListener,input } from '@angular/core';
import { Task } from '../interface/task.model';

@Directive({
  selector: '[appDragable]',
})
export class Dragable {
  appDraggable = input<Task>();
  constructor() { }
  @HostListener('dragstart', ['$event'])
 onDragStart(event: DragEvent) {
  console.log('drag start',this.appDraggable())
  event.dataTransfer?.setData('text/plain', JSON.stringify(this.appDraggable()));
  // ... visual feedback
}

}
