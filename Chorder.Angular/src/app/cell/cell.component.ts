import { Component, OnInit, Input } from '@angular/core';
import { SongMode } from '../song/song';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input('cell') cell: Cell;
  @Input('mode') mode: SongMode;

  toggle: boolean = false;

  switchMode($event = null){
    console.log("Fired: "+ this.toggle);
    console.log($event);

    if (this.mode == SongMode.EDIT)
      this.toggle = !this.toggle;

      if ($event) $event.stopPropagation();
  }
}

export class Cell {
  chord: string;
  word: string
}
