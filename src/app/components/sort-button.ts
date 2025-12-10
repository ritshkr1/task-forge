

import {Component, input,output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector:'tf-sort-button',
    template: `<button
            class="sort-button direction"
            (click)="handleSort()"
            type="button"
        >
            {{title()}}
            @if(direction()){<span class="sort-arrow">
                ▲
            </span>}
        </button>
    `,
    imports:[FormsModule]
})

export class SortButton{
     title = input<string>("");
     direction = input<string>("");

     onSort = output();

     handleSort(){
        this.onSort.emit()
     }

}

// onClick={onSort}