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

  @ViewChildren(CellComponent) cells: QueryList<CellComponent>;

  @Input() line: Line;
  SongMode = SongMode;

  onCellTab($event){
    console.log($event);

    console.log(this.cells);
  }
}

export class Line {
  cells: Cell[];
}
