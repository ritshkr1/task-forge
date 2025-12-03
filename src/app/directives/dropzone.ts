import { Directive,HostListener,output } from '@angular/core';
import { Task } from '../interface/task.model';

@Directive({
  selector: '[appDropzone]',
})
export class Dropzone {
  itemDropped = output<Task>();
  constructor() { }
  // Prevents default behavior to allow dropping
@HostListener('dragover', ['$event'])
onDragOver(event: DragEvent) {
  event.preventDefault(); 
  console.log('drag over', event)
}

// Retrieves data and emits event on drop
@HostListener('drop', ['$event'])
onDrop(event: DragEvent) {
  event.preventDefault();
  console.log('on drop', event)
  const data = event.dataTransfer?.getData('text/plain');
  console.log('on drop data', data)
  if (data) {
    this.itemDropped.emit(JSON.parse(data));
  }
}

}
