import { CellComponent } from './../cell/cell.component';
import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Cell } from '../cell/cell.component';
import { isArray } from 'util';
import { Part } from '../part/part.component';
import { SongMode, ViewMode } from '../song';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  @ViewChildren(CellComponent) cellComponents: QueryList<CellComponent>;

  @Input() line: Line;
  @Input() mode: SongMode;
  @Input() view: ViewMode;
  @Input() index: number;

  @Output() tab = new EventEmitter();

  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  onCellTab(cellComponent: CellComponent) {
    if (cellComponent.index < this.cellComponents.length - 1) {
      var nextCellComponent: CellComponent = this.cellComponents.toArray()[cellComponent.index + 1];
      nextCellComponent.isFocus = false;
      nextCellComponent.isEditing = true;


    } else if (cellComponent.index == this.cellComponents.length - 1) {
      // next line
      this.tab.emit(this);
    }
  }
}

export class Line {
  cells: Cell[];

  constructor(textLine: string) {
    this.cells = [];
    var words = textLine.split(' ');

    for (let i = 0; i < words.length; i++) {
      this.cells.push(new Cell());
      this.cells.push(new Cell(words[i]));
    }

    this.cells.push(new Cell());
  }
}