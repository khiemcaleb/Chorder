import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { Part } from '../models/part';
import { LineComponent } from '../line/line.component';
import { SongMode, ViewMode } from '../models/song';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent {
  @Input() part: Part;
  @Input() view: ViewMode;
  @Input() mode: SongMode;
  @Input() index: number;

  @ViewChildren(LineComponent) lineComponents: QueryList<LineComponent>;

  @Output() tab = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();

  isEditing: boolean = false;
  isFocus: boolean = true;
  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  get isEmptyName(): boolean {
    return !this.part.name && this.part.name.trim() == '';
  }

  onPartNameClick() {
    if (this.mode == SongMode.EDIT && !this.isEditing)
      this.isEditing = true;
  }

  onPartNameBlur() {
    if (this.isEditing && !this.isEmptyName) {
      this.isEditing = false;

      if (!this.isFocus)
        this.isFocus = true;
    }
  }

  onLineTab(lineComponent: LineComponent) {
    if (lineComponent.index < this.lineComponents.length - 1) {
      var nextLineComponent = this.lineComponents.toArray()[lineComponent.index + 1];
      var firstCell = nextLineComponent.cellComponents.first;
      firstCell.isFocus = false;
      firstCell.isEditing = true;
    }
    else if (lineComponent.index == this.lineComponents.length - 1) {
      this.tab.emit(this);
    }
  }

  pressRightArrow(lineComponent: LineComponent){
    if (lineComponent.index < this.lineComponents.length - 1) {
      var nextLineComponent = this.lineComponents.toArray()[lineComponent.index + 1];
      var firstCell = nextLineComponent.cellComponents.first;// first cell of next line
      var lastCell = lineComponent.cellComponents.last;// last cell of now line
      lastCell.isFocus = false;
      lastCell.isEditing = false;
      firstCell.isFocus = true;
      firstCell.isEditing = true;
    }
    else if (lineComponent.index == this.lineComponents.length - 1) {
      this.right.emit(this);
    }
  }

  removePart(){
    this.remove.emit(this);
  }

  pressLeftArrow(lineComponent: LineComponent){
    if (lineComponent.index > 0){
      var previousLineComponent = this.lineComponents.toArray()[lineComponent.index - 1];
      var lastCell = previousLineComponent.cellComponents.last; // last cell of privious line
      var firstCell = lineComponent.cellComponents.first; // first cell of now line
      firstCell.isFocus = false;
      lastCell.isEditing = true;
    }
    else if (lineComponent.index == 0){
      this.left.emit(this);
    }
  }

  pressDownArrow(arrayIndex)
  {
    console.log(1);
  }

  
}