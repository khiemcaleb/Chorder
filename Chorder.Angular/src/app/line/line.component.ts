import { CellComponent } from './../cell/cell.component';
import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Cell } from '../cell/cell.component';
import { DisplayMode } from '../song/song';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  @ViewChildren(CellComponent) cellCmps: QueryList<CellComponent>;

  @Input() line: Line;
  @Input() displayMode: DisplayMode;
  @Input() isReadOnly: boolean;

  onCellTab(cellCmp: CellComponent) {
    if (cellCmp.index < this.cellCmps.length - 1) {
      var nextCellCmp: CellComponent = this.cellCmps.toArray()[cellCmp.index + 1];
      nextCellCmp.isFocus = false;
      nextCellCmp.isEditing = true;
    } else {
      // next line
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
