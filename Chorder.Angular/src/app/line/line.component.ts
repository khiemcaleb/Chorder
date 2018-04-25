import { CellComponent } from './../cell/cell.component';
import { SongMode } from './../song/song';
import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Cell } from '../cell/cell.component';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  @ViewChildren(CellComponent) cellCmps: QueryList<CellComponent>;

  @Input() line: Line;
  SongMode = SongMode;

  onCellTab(cellCmp: CellComponent) {
    if (cellCmp.index < this.cellCmps.length - 1) {
      var nextCellCmp: CellComponent = this.cellCmps.toArray()[cellCmp.index + 1];
      setTimeout(() => { nextCellCmp.focus(); });
    } else {
      // next line
    }
  }
}

export class Line {
  cells: Cell[];
}
