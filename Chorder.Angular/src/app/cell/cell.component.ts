import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SongMode } from '../song/song';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input('cell') cell: Cell;
  @Input('mode') mode: SongMode;

  @Output() tab = new EventEmitter();

  isEditing: boolean = false; // true = edit, false = read

  onCellClick($event) {
    console.log('onCellClick');
    if (!this.isEditing)
      this.isEditing = true;
  }

  onChordEnter($event) {
    console.log('onChordEnter');
    if (this.isEditing)
      this.isEditing = false;
  }

  onChordClick($event) {
    console.log('onChordClick');
    $event.stopImmediatePropagation();
  }

  onChordBlur($event) {
    console.log('onChordBlur');
    if (this.isEditing)
      this.isEditing = false;
  }

  onChordTab($event){
    console.log('onChordTab');
    this.tab.emit($event);
  }
}

export class Cell {
  chord: string;
  word: string
}
