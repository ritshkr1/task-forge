import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector:'tf-input-field',
    template: `
    <input type='text' name='title' [(ngModel)]='control' placeholder='Title ...'/>
    `,
    imports:[FormsModule]
})

export class InputField{
    @Input() control = '';
}