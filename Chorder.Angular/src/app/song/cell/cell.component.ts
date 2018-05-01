import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SongMode, ViewMode } from '../song';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input() cell: Cell;
  @Input() index: number;
  @Input() mode: SongMode;
  @Input() view: ViewMode;

  @Output() tab = new EventEmitter();

  isEditing: boolean = false;
  isFocus: boolean = true;
  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  onCellClick() {
    if (!this.isEditing && this.mode == SongMode.EDIT) {
      this.isEditing = true;
    }
  }

  onChordEnter() {
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
  word: string;

  constructor(word: string = '', chord: string = ''){
    this.word = word;
    this.chord = chord;
  }

}
