import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { Part } from '../models/part';
import { LineComponent } from '../line/line.component';
import { SongMode, ViewMode } from '../models/song';
import { concat } from 'rxjs/internal/observable/concat';

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
  @Output() change = new EventEmitter();
  @Output() down = new EventEmitter();
  @Output() up = new EventEmitter();

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

  onChange($event) {
    this.change.emit($event);
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

  pressRightArrow(lineComponent: LineComponent) {
    if (lineComponent.index < this.lineComponents.length - 1) {
      var nextLineComponent = this.lineComponents.toArray()[lineComponent.index + 1];
      var firstCell = nextLineComponent.cellComponents.first;// first cell of next line
      var lastCell = lineComponent.cellComponents.last;// last cell of now line
      lastCell.isEditing = false;
      firstCell.isEditing = true;
    }
    else if (lineComponent.index == this.lineComponents.length - 1) {
      this.right.emit(this);
    }
  }

  removePart($event) {
    this.remove.emit(this);
    this.change.emit($event);
  }

  pressLeftArrow(lineComponent: LineComponent) {
    if (lineComponent.index > 0) {
      var previousLineComponent = this.lineComponents.toArray()[lineComponent.index - 1];
      var lastCell = previousLineComponent.cellComponents.last; // last cell of privious line
      var firstCell = lineComponent.cellComponents.first; // first cell of now line
      firstCell.isFocus = false;
      lastCell.isEditing = true;
    }
    else if (lineComponent.index == 0) {
      this.left.emit(this);
    }
  }

  pressDownArrow(arrayIndex){ // arrayIndex[0] is index cell, arrayIndex[1] is index line
    if (arrayIndex[1] < this.lineComponents.length - 1) {
      var nowLine = this.lineComponents.toArray()[arrayIndex[1]]
      var nowCell = nowLine.cellComponents.toArray()[arrayIndex[0]];
      var nextLine = this.lineComponents.toArray()[arrayIndex[1] + 1];

      if (arrayIndex[0] > nextLine.cellComponents.length - 1) {
        var nextCell = nextLine.cellComponents.last;
        nowCell.isEditing = false;
        nextCell.isEditing = true;
      }
      else if (arrayIndex[0] <= nextLine.cellComponents.length - 1) {
        var nextCell = nextLine.cellComponents.toArray()[arrayIndex[0]];
        nowCell.isEditing = false;
        nextCell.isEditing = true;
      }
    }
    else if (arrayIndex[1] == this.lineComponents.length - 1) {
      arrayIndex[2] = this.index;
      this.down.emit(arrayIndex);
    }
  }

  pressUpArrow(arrayIndex) {
    if (arrayIndex[1] > 0) {
      var nowLine = this.lineComponents.toArray()[arrayIndex[1]]
      var nowCell = nowLine.cellComponents.toArray()[arrayIndex[0]];
      var aboveLine = this.lineComponents.toArray()[arrayIndex[1] - 1];

      if (arrayIndex[0] > aboveLine.cellComponents.length - 1) {
        var aboveCell = aboveLine.cellComponents.last;
        nowCell.isEditing = false;
        aboveCell.isEditing = true;
      } else if (arrayIndex[0] <= aboveLine.cellComponents.length - 1) {
        var aboveCell = aboveLine.cellComponents.toArray()[arrayIndex[0]];
        nowCell.isEditing = false;
        aboveCell.isEditing = true;
      }
    } else if (arrayIndex[1] == 0) {
      arrayIndex[2] = this.index;
      this.up.emit(arrayIndex);
    }
  }

}