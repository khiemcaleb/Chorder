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
  @Input('index') index: number;

  @Output() tab = new EventEmitter();

  isEditing: boolean = false;
  isFocus: boolean = true;

  onCellClick($event) {
    if (!this.isEditing) {
      this.isEditing = true;
    }
  }

  onChordEnter($event) {
    if (this.isEditing)
      this.isEditing = false;
  }

  onChordBlur() {
    if (this.isEditing)
      this.isEditing = false;

    if (!this.isFocus)
      this.isFocus = true;
  }

  onChordTab() {
    this.tab.emit(this);
  }
}

export class Cell {
  chord: string;
  word: string
}
