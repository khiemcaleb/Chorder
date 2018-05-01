import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { Line, LineComponent } from '../line/line.component';
import { DisplayMode } from '../song';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent {
  @Input() part: Part;
  @Input() displayMode: DisplayMode;
  @Input() isReadOnly: boolean;
  @Input() index: number;

  @ViewChildren(LineComponent) lineComponents: QueryList<LineComponent>;

  @Output() tab = new EventEmitter();

  isEditing: boolean = false;
  isFocus: boolean = true;
  DisplayMode: typeof DisplayMode = DisplayMode;

  get isEmptyName(): boolean {
    return !this.part.name && this.part.name.trim() == '';
  }

  onPartNameClick() {
    if (!this.isReadOnly && !this.isEditing)
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
}

export class Part {
  name: string;
  lines: Line[];
  lyrics: string;
}