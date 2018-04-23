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

  isEditing: boolean = false; // true = edit, false = read

  switchMode($event = null) {
    console.log("Fired: " + this.isEditing);
    console.log($event);

    if (this.mode == SongMode.EDIT)
      this.isEditing = !this.isEditing;

    if ($event) $event.stopImmediatePropagation();
  }

  onCellClick($event) {
    if (!this.isEditing)
      this.isEditing = true;
  }

  onChordEnter($event) {
    if (this.isEditing)
      this.isEditing = false;
  }

  onChordClick($event) {
    $event.stopImmediatePropagation();
  }

  onChordBlur($event) {
    if (this.isEditing)
      this.isEditing = false;
  };
}

export class Cell {
  chord: string;
  word: string
}
