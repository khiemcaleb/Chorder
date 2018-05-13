import { CellComponent } from './../cell/cell.component';
import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { isArray } from 'util';
import { Line } from '../models/line';
import { SongMode, ViewMode } from '../models/song';

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
  @Output() left = new EventEmitter();

  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  pressLeftArrow(cellComponent: CellComponent){
    if (cellComponent.index > 0){
      var previousCellComponent: CellComponent = this.cellComponents.toArray()[cellComponent.index - 1]
        cellComponent.isFocus = false;
        previousCellComponent.isEditing = true;
    }
    else if (cellComponent.index == 0){
      //previous line
      this.left.emit(this); 
    }
  }

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
