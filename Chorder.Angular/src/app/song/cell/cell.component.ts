import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../models/cell';
import { SongMode, ViewMode } from '../models/song';

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
  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();
  @Output() down = new EventEmitter();

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

  pressLeftArrow(){ // on chord press left arrow
    this.left.emit(this)
  }
  
  onChordTab() {
    this.tab.emit(this);
  }

  pressRightArrow(){
    this.right.emit(this);
  }

  pressDownArrow(){
    this.down.emit(this.index);
  }
}
